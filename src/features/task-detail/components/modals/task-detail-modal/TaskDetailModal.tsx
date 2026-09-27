import { BaseModal } from "@/shared/components/modal";
import { useTaskDetailStore } from "@/features/task-detail/stores/task-detail.store.ts";
import Button from "@/shared/components/button/Button.tsx";
import TaskDetailInfo from "@/features/task-detail/components/uis/TaskDetailInfo";
import TaskDetailActivity from "@/features/task-detail/components/uis/TaskDetailActivity.tsx";

const TaskDetailModal = () => {
  const { openTaskDetail, onCloseTaskDetail } = useTaskDetailStore();
  return (
    <BaseModal
      isOpen={openTaskDetail.isOpen}
      onClose={onCloseTaskDetail}
      maxWidth={"max-w-4xl"}
    >
      <BaseModal.Content
        className={"flex w-full max-h-[90vh] flex-col overflow-hidden"}
      >
        <BaseModal.Header
          title={openTaskDetail.selectedTask?.title || "View Task Detail"}
          onClose={onCloseTaskDetail}
        />
        <BaseModal.Body
          className={
            "grid grid-cols-1 sm:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] gap-5 sm:gap-6 flex-1 min-h-0 max-h-180 overflow-y-auto sm:overflow-hidden overflow-x-hidden px-4 sm:px-6 sm:h-[75vh]"
          }
        >
          {openTaskDetail.selectedTask && (
            <>
              <TaskDetailInfo task={openTaskDetail.selectedTask} />
              <div className={"min-w-0 min-h-0"}>
                <TaskDetailActivity task={openTaskDetail.selectedTask} />
              </div>
            </>
          )}
        </BaseModal.Body>
        <BaseModal.Footer>
          <Button
            variant={"secondary"}
            fullWidth={false}
            onClick={onCloseTaskDetail}
            className={"w-full sm:w-auto"}
          >
            Close
          </Button>
        </BaseModal.Footer>
      </BaseModal.Content>
    </BaseModal>
  );
};

export default TaskDetailModal;
