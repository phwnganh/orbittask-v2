import Badge from "@/shared/components/data-display/Badge.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import {getTaskStatusHeader} from "@/features/task-board/utils/task-board.util.ts";

type TaskStatusFieldProps = {
    status: Task["status"];
}
const TaskStatusField = ({status}: TaskStatusFieldProps) => {
    return (
        <div className={"flex items-center gap-5"}>
            <label className={"text-sm text-secondary font-medium"}>Status:</label>
            <Badge variant={"info"}>{getTaskStatusHeader(status)}</Badge>
        </div>
    );
};

export default TaskStatusField;