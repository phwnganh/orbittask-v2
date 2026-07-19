import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import TaskActivityContent
    from "@/features/task-detail/components/task-detail-activity/task-activity-content/TaskActivityContent.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import {formatDistanceToNow} from "date-fns";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskActivityItemProps = {
    activity: Activity;
    task: Task;
}
const TaskActivityItem = ({activity, task}: TaskActivityItemProps) => {
    const displayName = [activity.first_name, activity.last_name]
        .filter(Boolean)
        .join(" ")
        || "Unknown user";

    const createdAt = activity.created_at ? new Date(activity.created_at) : null;
    const commentUpdatedAt = activity.comment_updated_at ? new Date(activity.comment_updated_at) : null;
    const isCreatedAtValid = createdAt instanceof Date && !Number.isNaN(createdAt.getTime());
    const isUpdatedAtValid = commentUpdatedAt instanceof Date && !Number.isNaN(commentUpdatedAt.getTime());
    const createdAtLabel = isCreatedAtValid
        ? formatDistanceToNow(createdAt, { addSuffix: true })
        : "";
    const updatedAtLabel = isUpdatedAtValid ? formatDistanceToNow(commentUpdatedAt, { addSuffix: true }) : "";

    const isDeletedComment = activity.action_type === "comment" && activity.metadata.content === null;
    const showEdited = !isDeletedComment && isUpdatedAtValid;
    return (
        <div className="flex gap-3 py-3">
            <Avatar
                size="sm"
                avatarUrl={activity.avatar_url}
            />

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm">
                        {displayName}
                    </span>

                    <span className="text-xs text-text-secondary">
                        {showEdited ? `Edited ${updatedAtLabel}` : createdAtLabel}
                    </span>
                </div>

                <div className="mt-1 text-sm text-text-primary">
                    <TaskActivityContent task={task} activity={activity}/>
                </div>
            </div>
        </div>
    );
};

export default TaskActivityItem;