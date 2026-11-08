import Card from "@/shared/components/data-display/Card.tsx";
import Skeleton from "@/shared/components/feedback/Skeleton.tsx";

const TaskCardSkeleton = () => {
    return (
        <Card className={"flex flex-col gap-4"}>
            {/* Header */}
            <div className={"flex items-center gap-2"}>
                <div className={"flex items-center gap-2 flex-1 min-w-0"}>
                    {/* Drag handle */}
                    <Skeleton className={"w-4 h-4 shrink-0"} />

                    {/* Title + description */}
                    <div className={"space-y-1 min-w-0 flex-1"}>
                        <Skeleton className={"h-5 w-3/4"} />
                        <Skeleton className={"h-4 w-full"} />
                    </div>
                </div>

                {/* Menu */}
                <Skeleton className={"w-8 h-8 shrink-0"} />
            </div>

            {/* Footer */}
            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-1.5"}>
                    {/* Priority badge */}
                    <Skeleton className={"h-6 w-16"} />

                    {/* Due date badge */}
                    <Skeleton className={"h-6 w-20"} />
                </div>

                {/* Avatar */}
                <Skeleton className={"w-6 h-6 rounded-full!"} />
            </div>
        </Card>
    );
};

export default TaskCardSkeleton;