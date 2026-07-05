import {useViewActivities} from "@/features/task-detail/hooks/useViewActivities.ts";
import type {Task} from "@/features/task/types/task.type.ts";
import TaskActivityItem
    from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityItem.tsx";

type TaskActivityListProps = {
    task: Task;
}
const TaskActivityList = ({task}: TaskActivityListProps) => {
    const {data: activities} = useViewActivities(task.id)
    const visibleActivities = activities.filter(activity => activity.action_type !== "comment_deleted");
    return (
        <div className={"space-y-4"}>
            {visibleActivities.map((activity, index) =>
                <TaskActivityItem
                    key={`${activity.id ?? "activity"}-${activity.action_type}-${activity.created_at}-${index}`}
                    activity={activity}
                    task={task}
                />)}
        </div>
    );
};

export default TaskActivityList;