import Badge from "@/shared/components/data-display/Badge.tsx";
import {getStartDateStatus} from "@/features/task/utils/task-date.util.ts";

type TaskStartDateFieldProps = {
    startDate?: string;
}
const TaskStartDateField = ({startDate}: TaskStartDateFieldProps) => {
    const{label, variant} = getStartDateStatus(startDate)
    return (
        <div className={"flex items-center gap-5"}>
            <label className={"text-sm text-secondary font-medium"}>Start Date:</label>
            <Badge variant={variant}>
                {label}
            </Badge>
        </div>
    );
};

export default TaskStartDateField;