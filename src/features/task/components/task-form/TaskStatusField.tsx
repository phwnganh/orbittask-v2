import Badge from "@/shared/components/data-display/Badge.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskStatusFieldProps = {
    status: Task["status"];
}
const TaskStatusField = ({status}: TaskStatusFieldProps) => {
    return (
        <div className={"flex items-center gap-5"}>
            <label className={"text-sm text-secondary font-medium"}>Status:</label>
            <Badge variant={"info"}>{status}</Badge>
        </div>
    );
};

export default TaskStatusField;