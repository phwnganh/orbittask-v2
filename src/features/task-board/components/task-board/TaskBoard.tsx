import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import AddTaskModal from "@/features/task/components/task-modal/add-task/AddTaskModal.tsx";
import {useTaskStore} from "@/features/task/stores/task.store.ts";
import EditTaskModal from "@/features/task/components/task-modal/edit-task/EditTaskModal.tsx";
import type {Profile} from "@/features/auth/types/auth.type.ts";
import RemoveTaskModal from "@/features/task/components/task-modal/remove-task/RemoveTaskModal.tsx";

type TaskBoardProps = {
    users?: Member[]
    projectId?: string;
    me?: Profile | null;
}
const TaskBoard = ({users, projectId, me}: TaskBoardProps) => {
    const {addTaskModal, onCloseAddTaskModal, isEditTaskModalOpen, onCloseEditTaskModal, isDeleteTaskModalOpen, onCloseDeleteTaskModal} = useTaskStore()
    return (
        <div className={"h-full min-h-0 overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn projectId={projectId} status={"todo"}/>
            <TaskColumn projectId={projectId} status={"in_progress"}/>
            <TaskColumn projectId={projectId} status={"completed"}/>
            <AddTaskModal me={me} status={addTaskModal.defaultStatus} isOpen={addTaskModal.isOpen} onClose={onCloseAddTaskModal} users={users} projectId={projectId}/>
            <EditTaskModal isOpen={isEditTaskModalOpen} onClose={onCloseEditTaskModal} users={users} me={me}/>
            <RemoveTaskModal isOpen={isDeleteTaskModalOpen} onClose={onCloseDeleteTaskModal}/>
        </div>
    );
};

export default TaskBoard;