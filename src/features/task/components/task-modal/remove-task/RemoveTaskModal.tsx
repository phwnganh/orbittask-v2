import {useRemoveTask} from "@/features/task/hooks/useRemoveTask.ts";
import {useTaskStore} from "@/features/task/stores/task.store.ts";
import ConfirmModal from "@/shared/components/modal/ConfirmModal.tsx";

type RemoveTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
}
const RemoveTaskModal = ({isOpen, onClose}: RemoveTaskModalProps) => {
    const {mutate, isPending} = useRemoveTask()
    const {selectedTask} = useTaskStore()
    const handleConfirm = () => {
        if(!selectedTask) return;

        mutate({
            task_id: selectedTask.id,
            project_id: selectedTask.project_id
        }, {
            onSuccess: () => {
                onClose?.()
            }
        })
    }
    return (
        <ConfirmModal isOpen={isOpen} title={"Remove Task"} description={selectedTask?.title} confirmText={"Remove"} type={"task"} onConfirm={handleConfirm} onClose={onClose} isLoading={isPending}/>
    );
};

export default RemoveTaskModal;