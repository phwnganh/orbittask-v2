import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {TaskFormValues} from "@/features/task/components/task-form/task.schema.ts";
import Input from "@/shared/components/inputs/Input.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskFormProps = {
    register: UseFormRegister<TaskFormValues>;
    errors: FieldErrors<TaskFormValues>;
    status: Task["status"];
}
const TaskFormFields = ({register, errors, status}: TaskFormProps) => {
    return (
        <div className={"flex flex-col gap-5"}>
            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>
                    Title
                </label>
                <Input {...register("title")} placeholder="Enter task title" />
                {errors.title && (
                    <span className={"text-xs text-error"}>{errors.title.message}</span>
                )}
            </div>

            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>
                    Description
                </label>
                <textarea {...register("description")} placeholder={"Enter project description"}
                          rows={4} className={"w-full px-3 py-2 rounded-md border border-border-primary bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"}/>
            </div>

            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>Assignee</label>

            </div>

            <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col gap-1.5"}>
                    <label className={"text-sm text-secondary font-medium"}>Start Date</label>
                </div>
                <div className={"flex flex-col gap-1.5"}>
                    <label className={"text-sm text-secondary font-medium"}>Due Date</label>
                </div>
            </div>
            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-secondary font-medium"}>Priority</label>
            </div>
            <div className={"flex items-center gap-3"}>
                <label className={"text-sm text-secondary font-medium"}>Status</label>
                <Badge variant={"info"}>{status}</Badge>
            </div>
        </div>
    );
};

export default TaskFormFields;