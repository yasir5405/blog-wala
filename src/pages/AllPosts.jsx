import { useEffect, useState } from "react";
import service from "../appwrite/config";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await service.getAllPosts();
      setPosts(posts);
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
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        All Blog Posts
      </h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No posts found.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
