import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";
import type {User} from "@supabase/supabase-js";

type TaskBoardProps = {
    users?: MemberResponse[]
    projectId?: string;
    me?: User;
}
const TaskBoard = ({users, projectId, me}: TaskBoardProps) => {
    return (
        <div className={"h-full overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn me={me} status={"todo"} users={users} projectId={projectId}/>
            <TaskColumn me={me} status={"in_progress"} users={users} projectId={projectId}/>
            <TaskColumn me={me} status={"completed"} users={users} projectId={projectId}/>
        </div>
    );
};

export default TaskBoard;