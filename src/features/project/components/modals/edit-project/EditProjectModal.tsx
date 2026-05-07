import {useForm} from "react-hook-form";
import {type ProjectFormValues, projectSchema} from "@/features/project/components/project-form/project.schema.ts";
import FormModal from "@/shared/components/modal/FormModal.tsx";
import ProjectFormFields from "@/features/project/components/project-form/ProjectFormFields.tsx";
import {useProjectStore} from "@/features/project/stores/project.store.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useUpdateProject} from "@/features/project/hooks/useUpdateProject.ts";
import {useEffect} from "react";

type EditProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
}
const EditProjectModal = ({isOpen, onClose}: EditProjectModalProps) => {
    const {selectedProject} = useProjectStore()
    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            title: "",
            description: ""
        }
    })
    const {reset} = form

    useEffect(() => {
        if(isOpen && selectedProject){
            reset({
                title: selectedProject.title,
                description: selectedProject.description
            })
        }
    }, [isOpen, selectedProject, reset])

    const {mutate, isPending} = useUpdateProject()
    const handleSubmit = form.handleSubmit(data => {
        if (!selectedProject) return;

        mutate({
            projectId: selectedProject.id,
            payload: data
        }, {
            onSuccess: () => {
                form.reset()
                onClose?.()
            }
        })
    })
    return (
        <FormModal isOpen={isOpen} title={"Edit Project"} onSubmit={handleSubmit} onClose={onClose} isLoading={isPending}>
            <ProjectFormFields register={form.register} errors={form.formState.errors}/>
        </FormModal>
    );
};

export default EditProjectModal;