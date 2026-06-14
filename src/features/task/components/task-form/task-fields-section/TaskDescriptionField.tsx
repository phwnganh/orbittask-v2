import type {FieldValues, Path, UseFormRegister} from "react-hook-form";
import Textarea from "@/shared/components/inputs/Textarea.tsx";

type TaskDescriptionFieldProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
}
const TaskDescriptionField = <T extends FieldValues>({register}: TaskDescriptionFieldProps<T>) => {
    return (
        <div className={"flex flex-col gap-1.5"}>
            <label className={"text-sm text-text-secondary font-medium"}>
                Description
            </label>
            <Textarea {...register("description" as Path<T>)} placeholder={"Enter project description"}
                      rows={4}/>
        </div>
    );
};

export default TaskDescriptionField;