import ConfirmModal from "@/shared/components/modal/ConfirmModal.tsx";
import {useDeleteProject} from "@/features/project/hooks/useDeleteProject.ts";
import {useProjectStore} from "@/features/project/stores/project.store.ts";

type DeleteProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
}
const DeleteProjectModal = ({isOpen, onClose}: DeleteProjectModalProps) => {
    const {mutate, isPending} = useDeleteProject()
    const {selectedProject} = useProjectStore()
    const handleConfirm = () => {
        if(!selectedProject) return;

        mutate({
            projectId: selectedProject.id,
        }, {
            onSuccess: () => {
                onClose?.()
            }
        })
    }
    return (
        <ConfirmModal isOpen={isOpen} onClose={onClose} title={"Delete Project"} description={selectedProject?.title} confirmText={"Delete"} onConfirm={handleConfirm} type={"project"} isLoading={isPending}/>
    );
};

export default DeleteProjectModal;