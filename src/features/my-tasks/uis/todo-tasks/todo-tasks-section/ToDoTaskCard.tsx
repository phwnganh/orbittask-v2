import type {Task} from "@/features/task/types/task.type.ts";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";

type TodoTaskCardProps = {
    task: Task;
}
const ToDoTaskCard = ({task}: TodoTaskCardProps) => {
    return (
        <div
            className={
                "bg-bg-primary border border-border-primary rounded-2xl p-3 hover:bg-bg-tertiary transition cursor-pointer"
            }
        >
            <div className={"flex items-start gap-3"}>
                <div
                    className={
                        "w-4 h-4 rounded-full border border-border-primary mt-1"
                    }
                ></div>
                <div className={"flex-1 min-w-0"}>
                    <p className={`font-medium truncate`}>
                        {task.title}
                    </p>

                    <div className={"flex items-center gap-2 mt-2"}>
                        <Badge
                            size={"sm"}
                            className={"capitalize"}
                            variant={getTaskPriorityBadgeVariant(task.priority)}
                        >
                            {task.priority}
                        </Badge>

                        <span className={"text-xs text-text-muted"}>
                      Orbit Task
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoTaskCard;