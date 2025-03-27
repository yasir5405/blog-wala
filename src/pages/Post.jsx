import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { useParams } from "react-router-dom";
import conf from "../conf/conf";
import parse from "html-react-parser";
import { Skeleton } from "@/components/ui/skeleton";

const Post = () => {
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      try {
        const post = await service.databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          id
        );
        const featuredImage = service.storage.getFilePreview(
          conf.appwriteBucketId,
          post?.featuredImage
        );
        setPost(post);
        setImage(featuredImage);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    getPost();
  }, [id]);

  // Skeleton when post is loading
  if (!post) {
    return (
      <div className="mt-[65px] w-full min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="mt-[65px] w-full max-w-4xl bg-zinc-800/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6 space-y-6">
          {/* Skeleton Title (Matches text-3xl) */}
          <Skeleton className="h-10 w-3/4 bg-zinc-700" />

          {/* Skeleton Author and Date (Matches text-sm) */}
          <Skeleton className="h-4 w-1/2 mb-4 bg-zinc-700" />

          {/* Skeleton Image (Matches exact image height) */}
          <Skeleton className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg mb-4 bg-zinc-700" />

          {/* Skeleton Content (Matches text-lg with consistent line height) */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-full bg-zinc-700" />
            <Skeleton className="h-5 w-5/6 bg-zinc-700" />
            <Skeleton className="h-5 w-4/5 bg-zinc-700" />
            <Skeleton className="h-5 w-3/4 bg-zinc-700" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[65px] w-full min-h-screen bg-zinc-950 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-zinc-800/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6">
        {/* Post Title */}
        <h1 className="text-3xl font-bold text-white">{post.title}</h1>

        {/* Author and Date */}
        <p className="text-zinc-400 text-sm mt-2">
          By <span className="text-sky-500 font-medium">{post.author}</span> |{" "}
          {new Date(post.$createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Featured Image */}
        {image && (
          <div className="w-full my-4">
            <img
              src={image}
              alt="Featured"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg border border-white/20"
            />
          </div>
        )}

        {/* Post Content */}
        <div className="prose prose-invert text-zinc-300 text-lg leading-7">
          {parse(post.content)}
        </div>
      </div>
    </div>
  );
};

export default Post;
