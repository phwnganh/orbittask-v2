import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import TaskActivityContent
    from "@/features/task-detail/components/task-detail-activity/task-activity-content/TaskActivityContent.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import {formatDistanceToNow} from "date-fns";

type TaskActivityItemProps = {
    activity: Activity;
}
const TaskActivityItem = ({activity}: TaskActivityItemProps) => {
    return (
        <div className="flex gap-3 py-3">
            <Avatar
                size="sm"
                avatarUrl={activity.avatar_url}
            />

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm">
                        {activity.first_name} {activity.last_name}
                    </span>

                    <span className="text-xs text-text-secondary">
                        {formatDistanceToNow(
                            new Date(activity.created_at),
                            { addSuffix: true }
                        )}
                    </span>
                </div>

                <div className="mt-1 text-sm text-text-primary">
                    <TaskActivityContent activity={activity}/>
                </div>
            </div>
        </div>
    );
};

export default TaskActivityItem;