import Badge from "@/shared/components/data-display/Badge.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import {getDueDateStatus} from "@/features/task/utils/task-date.util.ts";
import {getTaskStatusHeader} from "@/features/task-board/utils/task-board.util.ts";

type TaskDetailContentProps = {
    task: Task;
}
const TaskDetailInfo = ({task}: TaskDetailContentProps) => {
    const dueDateStatus = getDueDateStatus(task.due_date, task.status === "completed")
    return (
        <div className={"overflow-y-auto pr-3 space-y-5 scrollbar-custom"}>
            <div>
                <h4 className={"text-xs font-semibold text-text-secondary tracking-wide"}>Description</h4>
                <p className={`text-sm mt-2 ${task.description ? "" : "text-text-secondary italic"}`}>
                    {task.description || "No description"}
                </p>
            </div>

            <div className={"space-y-3"}>
                <div className="grid grid-cols-[100px_1fr] gap-3 text-sm">
                    <span className="text-xs font-medium text-text-secondary">Project</span>
                    <span className="text-sm">{task.project_name}</span>

                    <span className="text-xs font-medium text-text-secondary">Assignee</span>
                    <span className="text-sm">{task.first_name} {task.last_name}</span>

                    <span className="text-xs capitalize font-medium text-text-secondary">Priority</span>
                    <div><Badge variant={getTaskPriorityBadgeVariant(task.priority)} className={"w-fit capitalize"} size={"sm"}>{task.priority}</Badge></div>

                    <span className="text-xs font-medium text-text-secondary">Due Date</span>
                    <div><Badge variant={dueDateStatus.variant} className={"w-fit"} size={"sm"}>{dueDateStatus.label}</Badge></div>

                    <span className="text-xs font-medium text-text-secondary">Status</span>
                    <div><Badge variant={"info"} className={"w-fit"} size={"sm"}>{getTaskStatusHeader(task.status)}</Badge></div>

                    <span className="text-xs font-medium text-text-secondary">Created By</span>
                    <span className="text-sm">{task.created_by_first_name} {task.created_by_last_name}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailInfo;