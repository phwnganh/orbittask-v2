import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import TaskActivityContent
    from "@/features/task-detail/components/task-detail-activity/task-activity-content/TaskActivityContent.tsx";

type TaskActivityItemProps = {
    activity: Activity;
}
const TaskActivityItem = ({activity}: TaskActivityItemProps) => {
    return (
        <div className={"border border-border-primary rounded-lg p-3"}>
            <div className={"flex justify-between items-start gap-3"}>
                <div>
                    <p className={"font-medium"}>
                        {activity.first_name} {activity.last_name}
                    </p>
                    <TaskActivityContent activity={activity}/>
                </div>
                <span className="text-xs text-text-secondary shrink-0">
                    {activity.created_at}
                </span>
            </div>
        </div>
    );
};

export default TaskActivityItem;