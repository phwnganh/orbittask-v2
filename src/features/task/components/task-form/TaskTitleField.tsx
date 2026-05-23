import Input from "@/shared/components/inputs/Input.tsx";
import type {FieldErrors, FieldValues, Path, UseFormRegister} from "react-hook-form";
type TaskTitleFieldProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
}
const TaskTitleField = <T extends FieldValues>({register, errors}: TaskTitleFieldProps<T>) => {
    return (
        <div className={"flex flex-col gap-1.5"}>
            <label className={"text-sm text-text-secondary font-medium"}>
                Title
            </label>
            <Input {...register("title" as Path<T>)} placeholder="Enter task title" />
            {errors.title && (
                <span className={"text-xs text-error"}>{String(errors.title.message)}</span>
            )}
        </div>
    );
};

export default TaskTitleField;