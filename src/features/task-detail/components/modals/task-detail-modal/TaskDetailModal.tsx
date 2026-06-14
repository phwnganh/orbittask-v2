import {BaseModal} from "@/shared/components/modal";
import {useTaskDetailStore} from "@/features/task-detail/stores/task-detail.store.ts";
import Button from "@/shared/components/button/Button.tsx";
import TaskDetailInfo from "@/features/task-detail/components/uis/TaskDetailInfo";
import TaskDetailActivity from "@/features/task-detail/components/uis/TaskDetailActivity.tsx";

const TaskDetailModal = () => {
    const {openTaskDetail, onCloseTaskDetail} = useTaskDetailStore()
    return (
        <BaseModal isOpen={openTaskDetail.isOpen} onClose={onCloseTaskDetail} maxWidth={"max-w-4xl"}>
            <BaseModal.Content>
                <BaseModal.Header title={openTaskDetail.selectedTask?.title || "View Task Detail"} onClose={onCloseTaskDetail} />
                <BaseModal.Body className={"grid grid-cols-[260px_1fr] gap-6 max-h-full"}>
                    {openTaskDetail.selectedTask &&
                        <>
                            <TaskDetailInfo task={openTaskDetail.selectedTask}/>
                            <TaskDetailActivity task={openTaskDetail.selectedTask}/>
                        </>
                    }
                </BaseModal.Body>
                <BaseModal.Footer>
                    <Button variant={"secondary"} fullWidth={false} onClick={onCloseTaskDetail}>Close</Button>
                </BaseModal.Footer>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default TaskDetailModal;