import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type TaskBoardProps = {
    users?: MemberResponse[]
}
const TaskBoard = ({users}: TaskBoardProps) => {
    return (
        <div className={"h-full overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn status={"todo"} users={users}/>
            <TaskColumn status={"in_progress"} users={users}/>
            <TaskColumn status={"completed"} users={users}/>
        </div>
    );
};

export default TaskBoard;