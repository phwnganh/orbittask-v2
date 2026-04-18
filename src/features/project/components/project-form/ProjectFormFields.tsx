import {type FieldErrors, type UseFormRegister} from "react-hook-form";
import {type ProjectFormValues} from "@/features/project/components/project-form/project.schema.ts";
import Input from "@/shared/components/Input.tsx";

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
                <textarea {...register("description")} placeholder={"Enter project description"}
                rows={4} className={"w-full px-3 py-2 rounded-md border border-border-primary bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"}/>
                {errors.description && (
                    <span className={"text-xs text-error"}>{errors.description.message}</span>
                )}
            </div>

        </div>
    );
};

export default ProjectFormFields;