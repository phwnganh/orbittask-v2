import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";
import type {User} from "@supabase/supabase-js";
import AddTaskModal from "@/features/task/components/task-modal/add-task/AddTaskModal.tsx";
import {useTaskStore} from "@/features/task/stores/task.store.ts";

type TaskBoardProps = {
    users?: MemberResponse[]
    projectId?: string;
    me?: User;
}
const TaskBoard = ({users, projectId, me}: TaskBoardProps) => {
    const {addTaskModal, onCloseAddTaskModal} = useTaskStore()

    return (
        <div className={"h-full overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn status={"todo"}/>
            <TaskColumn status={"in_progress"}/>
            <TaskColumn status={"completed"}/>
            <AddTaskModal me={me} status={addTaskModal.defaultStatus} isOpen={addTaskModal.isOpen} onClose={onCloseAddTaskModal} users={users} projectId={projectId}/>
        </div>
    );
};

export default TaskBoard;