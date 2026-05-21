import type {UseFormRegister} from "react-hook-form";
import type {TaskFormValues} from "@/features/task/schemas/task.schema.ts";

type TaskDescriptionFieldProps = {
    register: UseFormRegister<TaskFormValues>;
}
const TaskDescriptionField = ({register}: TaskDescriptionFieldProps) => {
    return (
        <div className={"flex flex-col gap-1.5"}>
            <label className={"text-sm text-text-secondary font-medium"}>
                Description
            </label>
            <textarea {...register("description")} placeholder={"Enter project description"}
                      rows={4} className={"w-full px-3 py-2 rounded-md border border-border-primary bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"}/>
        </div>
    );
};

export default TaskDescriptionField;