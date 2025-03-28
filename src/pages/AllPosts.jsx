import { useEffect, useState } from "react";
import service from "../appwrite/config";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await service.getAllPosts();
      setPosts(posts);
      setLoading(false);
    };

    getPosts();
  }, []);

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="pt-[85px] min-h-screen py-10 px-4 bg-zinc-950">
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        All Blog Posts
      </h1>

      {loading ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No posts found.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {posts.map((post) => (
            <Link key={post?.$id} to={`/posts/${post.$id}`} className="group">
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
