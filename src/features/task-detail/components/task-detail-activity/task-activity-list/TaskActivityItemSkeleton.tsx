import Skeleton from "@/shared/components/feedback/Skeleton";

const TaskActivityItemSkeleton = () => {
  return (
    <div
      className="flex min-w-0 gap-3 rounded-lg bg-bg-primary/40 p-3"
      aria-hidden="true"
    >
      {/* Avatar */}
      <Skeleton className="h-8 w-8 shrink-0 rounded-full" />

      <div className="min-w-0 flex-1">
        {/* Author + timestamp */}
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3 w-16 rounded" />
        </div>

        {/* Activity */}
        <div className="mt-2 space-y-2">
          {/* Change label */}
          <Skeleton className="h-4 w-28 rounded" />

          {/* From → To */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-16 rounded-md" />

            <Skeleton className="h-3 w-3 rounded" />

            <Skeleton className="h-6 w-16 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskActivityItemSkeleton;
