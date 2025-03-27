
import { ArrowUpRight } from "lucide-react";
import service from "../appwrite/config";
import conf from "../conf/conf";
import parse from "html-react-parser";

const BlogCard = ({ image, author, date, title, content }) => {
  return (
    <div className="w-full max-w-[380px] border border-zinc-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer bg-zinc-950">
      {/* Image Section */}
      <div className="h-[200px] w-full">
        <img
          src={service.storage.getFilePreview(conf.appwriteBucketId, image)}
          className="h-full w-full object-cover"
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between space-y-3">
        {/* Author & Date */}
        <h1 className="text-sm font-medium text-sky-500">
          {author} <span className="text-zinc-400">|</span> {date}
        </h1>

        {/* Title */}
        <h1 className="text-lg font-semibold flex items-center justify-between text-white">
          {title} <ArrowUpRight size={24} className="text-zinc-400" />
        </h1>

        {/* Description (Truncated for Better Layout) */}
        <p className="prose prose-invert  text-sm text-zinc-400 line-clamp-3">{parse(content)}</p>
      </div>
    </div>
  );
};

export default BlogCard;
