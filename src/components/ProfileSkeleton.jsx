import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <Skeleton className="h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] rounded-full bg-zinc-700/50" />
  );
};

export default ProfileSkeleton;
