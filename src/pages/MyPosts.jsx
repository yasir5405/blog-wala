import { useEffect, useState } from "react";
import service from "../appwrite/config";
import conf from "../conf/conf";
import { Query } from "appwrite";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogCard, Input } from "../components";
import { Skeleton } from "@/components/ui/skeleton";
import { useForm } from "react-hook-form";

const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { register, watch } = useForm();

  const searchQuery = watch("query", "");
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const getMyPosts = async () => {
      if (!userData) return;
      try {
        const posts = await service.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          [Query.equal("userId", userData.$id)]
        );
        setMyPosts(posts.documents);
        setFilteredPosts(posts.documents);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getMyPosts();
  }, [userData]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPosts(myPosts);
    } else {
      const filtered = myPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, myPosts]);

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="pt-[85px] w-full min-h-screen bg-zinc-950 text-white flex flex-col items-center py-10 px-6 md:px-12 lg:px-20">
      <Input
        className="w-full bg-zinc-900 text-white focus:border-white"
        placeholder="Search Posts"
        type="text"
        {...register("query")}
      />
      <div className="w-full max-w-full mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Show skeletons while loading */}
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full max-w-[380px] border border-zinc-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer bg-zinc-950"
            >
              {/* Skeleton Image */}
              <Skeleton className="h-[200px] w-full bg-zinc-700" />

              {/* Content Section Skeleton */}
              <div className="p-4 space-y-3">
                {/* Skeleton for Author & Date */}
                <Skeleton className="h-4 w-1/2 bg-zinc-700" />

                {/* Skeleton for Title */}
                <Skeleton className="h-6 w-3/4 bg-zinc-700" />

                {/* Skeleton for Content */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full bg-zinc-700" />
                  <Skeleton className="h-4 w-5/6 bg-zinc-700" />
                  <Skeleton className="h-4 w-4/5 bg-zinc-700" />
                </div>
              </div>
            </div>
          ))
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.$id} to={`/posts/${post.$id}`}>
              <BlogCard
                image={post.featuredImage}
                author={post.author}
                date={new Date(post.$createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                title={post.title}
                content={truncateText(post.content, 150)}
              />
            </Link>
          ))
        ) : (
          <p className="text-zinc-400 text-lg text-center col-span-full">
            {searchQuery
              ? `No results found for "${searchQuery}".`
              : "No posts available."}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
