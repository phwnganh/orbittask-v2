import ConfirmModal from "@/shared/components/modal/ConfirmModal.tsx";
import {useRemoveComment} from "@/features/task-detail/hooks/useRemoveComment.ts";
import {useCommentStore} from "@/features/task-detail/stores/comment.store.ts";

type RemoveCommentModalProps = {
    taskId: string;
}
const RemoveCommentModal = ({taskId}: RemoveCommentModalProps) => {
    const {mutate, isPending} = useRemoveComment()
    const {openRemovingComment, onCloseRemovingComment} = useCommentStore()
    const selectedCommentId = openRemovingComment.selectedCommentId
    const selectedContent = openRemovingComment.selectedContent ?? ""

    const handleRemoveComment = () => {
        if (!selectedCommentId) return
        mutate({
            commentId: selectedCommentId,
            taskId: taskId
        }, {
            onSuccess: () => {
                onCloseRemovingComment();
            }
        })
    }

    return (
        <ConfirmModal
            type={"comment"}
            onConfirm={handleRemoveComment}
            onClose={onCloseRemovingComment}
            isOpen={openRemovingComment.isOpen}
            title={"Remove Comment"}
            cancelText={"Cancel"}
            confirmText={"Remove"}
            description={selectedContent}
            isLoading={isPending}
        />
    );
};

export default RemoveCommentModal;