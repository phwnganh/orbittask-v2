import {useViewActivities} from "@/features/task-detail/hooks/useViewActivities.ts";
import type {Task} from "@/features/task/types/task.type.ts";
import TaskActivityItem
    from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityItem.tsx";

type TaskActivityListProps = {
    task: Task;
}
const TaskActivityList = ({task}: TaskActivityListProps) => {
    const {data: activities} = useViewActivities(task.id)
    return (
        <div className={"space-y-4"}>
            {activities.map((activity, index) =>
                <TaskActivityItem
                    key={index}
                    activity={activity}
                />)}
        </div>
    );
};

export default TaskActivityList;