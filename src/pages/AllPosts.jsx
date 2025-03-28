import { useEffect, useState } from "react";
import service from "../appwrite/config";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import { useForm } from "react-hook-form";
import { Input } from "@/components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { register, watch } = useForm();

  const searchQuery = watch("query", "");

  useEffect(() => {
    const getPosts = async () => {
      const posts = await service.getAllPosts();
      setPosts(posts);
      setFilteredPosts(posts);
      setLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="pt-[85px] min-h-screen py-10 bg-zinc-950 px-6 md:px-12 lg:px-20">
      <Input
        className="w-full bg-zinc-900 text-white focus:border-white"
        placeholder="Search Posts"
        type="text"
        {...register("query")}
      />

      {loading ? (
        <div className="max-w-full mt-9 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      ) : filteredPosts.length === 0 ? (
        <p className="text-center mt-9 text-gray-400 text-lg">
          {searchQuery
            ? `No results found for "${searchQuery}".`
            : "No posts available."}
        </p>
      ) : (
        <div className="max-w-full mt-9 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center ">
          {filteredPosts.map((post) => (
            <Link
              key={post?.$id}
              to={`/posts/${post.$id}`}
              className="group"
              aria-label={`Read post: ${post?.title}`}
            >
              <BlogCard
                image={post?.featuredImage}
                author={post?.author}
                date={new Date(post?.$createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                title={post?.title}
                content={truncateText(post?.content, 150)}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPosts;
