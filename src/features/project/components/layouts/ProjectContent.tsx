import TaskBoard from "@/features/task-board/components/task-board/TaskBoard.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import type {User} from "@supabase/supabase-js";

type ProjectContentProps = {
    users?: Member[]
    projectId?: string;
    me?: User;
}
const ProjectContent = ({users, projectId, me}: ProjectContentProps) => {
    return (
        <main className={"flex-1 min-h-0"}>
            <TaskBoard me={me} users={users} projectId={projectId}/>
        </main>
    );
};

export default ProjectContent;