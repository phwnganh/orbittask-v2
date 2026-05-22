import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type TaskBoardProps = {
    users?: MemberResponse[]
    projectId?: string
}
const TaskBoard = ({users, projectId}: TaskBoardProps) => {
    return (
        <div className={"h-full overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn status={"todo"} users={users} projectId={projectId}/>
            <TaskColumn status={"in_progress"} users={users} projectId={projectId}/>
            <TaskColumn status={"completed"} users={users} projectId={projectId}/>
        </div>
    );
};

export default TaskBoard;