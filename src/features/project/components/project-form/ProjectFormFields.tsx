import {type FieldErrors, type UseFormRegister} from "react-hook-form";
import {type ProjectFormValues} from "@/features/project/schemas/project.schema.ts";
import Input from "@/shared/components/inputs/Input.tsx";
import Textarea from "@/shared/components/inputs/Textarea.tsx";

type ProjectFormProps = {
    register: UseFormRegister<ProjectFormValues>;
    errors: FieldErrors<ProjectFormValues>;
}


const ProjectFormFields = ({register, errors}: ProjectFormProps) => {
    return (
        <div className={"flex flex-col gap-5"}>
            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>
                    Title
                </label>
                <Input {...register("title")} placeholder={"Enter project title"}/>
                {errors.title && (
                    <span className={"text-xs text-error"}>{errors.title.message}</span>
                )}
            </div>

            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>
                    Description
                </label>
                <Textarea {...register("description")} placeholder={"Enter project description"}
                rows={4}/>
                {errors.description && (
                    <span className={"text-xs text-error"}>{errors.description.message}</span>
                )}
            </div>

        </div>
    );
};

export default ProjectFormFields;