import {useForm} from "react-hook-form";
import {type ProjectFormValues, projectSchema} from "@/features/project/components/project-form/project.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import ProjectFormFields from "@/features/project/components/project-form/ProjectFormFields.tsx";
import FormModal from "@/shared/components/modal/FormModal.tsx";
import {useCreateProject} from "@/features/project/hooks/useCreateProject.ts";

type AddProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
}
const AddProjectModal = ({isOpen, onClose}: AddProjectModalProps) => {
    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            description: "",
        }
    })

    const {mutate, isPending} = useCreateProject()

    const handleSubmit = form.handleSubmit(data => {
        mutate(data, {
            onSuccess: () => {
                form.reset()
                onClose?.()
        }
        })
    })
    return (
        <FormModal isOpen={isOpen} title={"Create Project"} onSubmit={handleSubmit} onClose={onClose} isLoading={isPending}>
            <ProjectFormFields register={form.register} errors={form.formState.errors}/>
        </FormModal>
    );
};

export default AddProjectModal;