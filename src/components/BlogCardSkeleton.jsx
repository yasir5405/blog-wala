import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUpRight } from "lucide-react";

const BlogCardSkeleton = () => {
  return (
    <div className="w-full max-w-[380px] border border-zinc-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer bg-zinc-950">
      {/* Skeleton for Image Section */}
      <Skeleton className="h-[200px] w-full bg-zinc-800 animate-pulse" />

      {/* Skeleton for Content Section */}
      <div className="p-4 flex flex-col justify-between space-y-3">
        {/* Skeleton for Author & Date */}
        <Skeleton className="h-4 w-3/4 bg-zinc-700 animate-pulse" />

        {/* Skeleton for Title & Icon */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-5/6 bg-zinc-700 animate-pulse" />
          <ArrowUpRight size={24} className="text-zinc-700 opacity-50" />
        </div>

        {/* Skeleton for Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-zinc-700 animate-pulse" />
          <Skeleton className="h-4 w-5/6 bg-zinc-700 animate-pulse" />
          <Skeleton className="h-4 w-4/6 bg-zinc-700 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
