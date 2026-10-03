import Badge from "@/shared/components/data-display/Badge.tsx";
import type { Task } from "@/features/task/types/task.type.ts";
import { getTaskPriorityBadgeVariant } from "@/features/task/utils/task-priority.util.ts";
import { getDueDateStatus } from "@/features/task/utils/task-date.util.ts";
import { getTaskStatusHeader } from "@/features/task-board/utils/task-board.util.ts";
import { getUserDisplayName } from "../../utils/task-activity-user-display.util";
import type { Profile } from "@/features/auth/types/auth.type";

type TaskDetailContentProps = {
  task: Task;
  me?: Profile | null;
};
const TaskDetailInfo = ({ task, me }: TaskDetailContentProps) => {
  const dueDateStatus = getDueDateStatus(
    task.due_date,
    task.status === "completed",
  );
  return (
    <div className={"sm:overflow-y-auto sm:pr-3 space-y-5 sm:scrollbar-custom"}>
      <div>
        <h4
          className={"text-xs font-semibold text-text-secondary tracking-wide"}
        >
          Description
        </h4>
        <p
          className={`text-sm mt-2 ${task.description ? "" : "text-text-secondary italic"}`}
        >
          {task.description || "No description"}
        </p>
      </div>

      <div className={"space-y-3"}>
        <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3 text-sm">
          <span className="text-xs font-medium text-text-secondary">
            Project
          </span>
          <span className="text-sm">{task.project_name}</span>

          <span className="text-xs font-medium text-text-secondary">
            Assignee
          </span>
          <span className="text-sm">
            {getUserDisplayName(
              {
                id: task.assignee_id,
                first_name: task.first_name,
                last_name: task.last_name,
              },
              me?.id,
            )}
          </span>

          <span className="text-xs capitalize font-medium text-text-secondary">
            Priority
          </span>
          <div>
            <Badge
              variant={getTaskPriorityBadgeVariant(task.priority)}
              className={"w-fit capitalize"}
              size={"sm"}
            >
              {task.priority}
            </Badge>
          </div>

          <span className="text-xs font-medium text-text-secondary">
            Due Date
          </span>
          <div>
            <Badge
              variant={dueDateStatus.variant}
              className={"w-fit"}
              size={"sm"}
            >
              {dueDateStatus.label}
            </Badge>
          </div>

          <span className="text-xs font-medium text-text-secondary">
            Status
          </span>
          <div>
            <Badge variant={"info"} className={"w-fit"} size={"sm"}>
              {getTaskStatusHeader(task.status)}
            </Badge>
          </div>

          <span className="text-xs font-medium text-text-secondary">
            Created By
          </span>
          <span className="text-sm">
            {getUserDisplayName(
              {
                id: task.created_by,
                first_name: task.created_by_first_name,
                last_name: task.created_by_last_name,
              },
              me?.id,
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailInfo;
