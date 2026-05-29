import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import type {Task} from "@/features/task/types/task.type.ts";
import {PRIORITY_BADGE} from "@/features/my-tasks/constants/task-priority.constant.ts";

type TaskBadgeProps = {
    task: Task;
}
const TaskBadge = ({task}: TaskBadgeProps) => {
    const priorityVariant = getTaskPriorityBadgeVariant(task.priority)
    return (
        <div
            key={task.id}
            className={`text-xs px-1.5 py-0.5 rounded-md truncate ${priorityVariant ? PRIORITY_BADGE[priorityVariant] : ""}`}
        >
            {task.title}
        </div>
    );
};

export default TaskBadge;