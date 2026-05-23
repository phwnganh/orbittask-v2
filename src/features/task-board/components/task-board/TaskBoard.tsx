import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import AddTaskModal from "@/features/task/components/task-modal/add-task/AddTaskModal.tsx";
import {useTaskStore} from "@/features/task/stores/task.store.ts";
import type {User} from "@supabase/supabase-js";

type TaskBoardProps = {
    users?: Member[]
    projectId?: string;
    me?: User;
}
const TaskBoard = ({users, projectId, me}: TaskBoardProps) => {
    const {addTaskModal, onCloseAddTaskModal} = useTaskStore()
    return (
        <div className={"h-full min-h-0 overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn projectId={projectId} status={"todo"}/>
            <TaskColumn projectId={projectId} status={"in_progress"}/>
            <TaskColumn projectId={projectId} status={"completed"}/>
            <AddTaskModal me={me} status={addTaskModal.defaultStatus} isOpen={addTaskModal.isOpen} onClose={onCloseAddTaskModal} users={users} projectId={projectId}/>
        </div>
    );
};

export default TaskBoard;