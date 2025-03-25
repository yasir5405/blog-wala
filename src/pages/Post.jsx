// import { useEffect, useState } from "react";
// import service from "../appwrite/config";
// import { useParams } from "react-router-dom";
// import conf from "../conf/conf";
// import parse from "html-react-parser";

// const Post = () => {
//   const [post, setPost] = useState(null);
//   const [image, setImage] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const getPost = async () => {
//       try {
//         const post = await service.databases.getDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteCollectionId,
//           id
//         );
//         const featuredImage = service.storage.getFilePreview(
//           conf.appwriteBucketId,
//           post?.featuredImage
//         );
//         setPost(post);
//         setImage(featuredImage);
//       } catch (error) {
//         console.error("Error fetching post:", error);
//       }
//     };

//     getPost();
//   }, [id]);

//   if (!post) {
//     return (
//       <div className="w-full min-h-screen flex items-center justify-center">
//         <p className="text-lg text-gray-500">Loading posts...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-[65px] w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
//         {/* Post Title */}
//         <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>

//         {/* Author and Date */}
//         <p className="text-gray-600 text-sm mt-2">
//           By <span className="text-sky-500 font-medium">{post.author}</span> |{" "}
//           {new Date(post.$createdAt).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </p>

//         {/* Featured Image */}
//         {image && (
//           <div className="w-full my-4">
//             <img
//               src={image}
//               alt="Featured"
//               className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center rounded-lg"
//             />
//           </div>
//         )}

//         {/* Post Content */}
//         <div className="text-gray-700 text-lg leading-7">
//           {parse(post.content)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;



import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { useParams } from "react-router-dom";
import conf from "../conf/conf";
import parse from "html-react-parser";

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

  if (!post) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-zinc-950">
        <p className="text-lg text-gray-400">Loading posts...</p>
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
        <div className="text-zinc-300 text-lg leading-7">
          {parse(post.content)}
        </div>
      </div>
    </div>
  );
};

export default Post;
