import Skeleton from "@/shared/components/feedback/Skeleton";

const TaskActivityCommentItemSkeleton = () => {
  return (
    <div className="flex min-w-0 gap-3 rounded-lg bg-bg-primary/40 p-3" aria-hidden="true">
      {/* Avatar */}
      <Skeleton className="h-8 w-8 shrink-0 rounded-full" />

      <div className="min-w-0 flex-1">
        {/* Author + timestamp */}
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3 w-16 rounded" />
        </div>

        {/* Comment content */}
        <div className="mt-2 space-y-1.5">
          <Skeleton className="h-4 w-[90%] rounded" />
          <Skeleton className="h-4 w-[65%] rounded" />
        </div>

        {/* Comment actions */}
        <div className="mt-2 flex items-center gap-3">
          <Skeleton className="h-3 w-10 rounded" />
          <Skeleton className="h-3 w-10 rounded" />
        </div>
      </div>
    </div>
  );
};

export default TaskActivityCommentItemSkeleton;
