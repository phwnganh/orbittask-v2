import Input from "@/shared/components/inputs/Input.tsx";
import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {TaskFormValues} from "@/features/task/schemas/task.schema.ts";
type TaskTitleFieldProps = {
    register: UseFormRegister<TaskFormValues>;
    errors: FieldErrors<TaskFormValues>;
}
const TaskTitleField = ({register, errors}: TaskTitleFieldProps) => {
    return (
        <div className={"flex flex-col gap-1.5"}>
            <label className={"text-sm text-text-secondary font-medium"}>
                Title
            </label>
            <Input {...register("title")} placeholder="Enter task title" />
            {errors.title && (
                <span className={"text-xs text-error"}>{errors.title.message}</span>
            )}
        </div>
    );
};

export default TaskTitleField;