import TaskBoard from "@/features/task-board/components/task-board/TaskBoard.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type ProjectContentProps = {
    users?: MemberResponse[]
}
const ProjectContent = ({users}: ProjectContentProps) => {
    return (
        <main className={"flex-1 min-h-0"}>
            <TaskBoard users={users}/>
        </main>
    );
};

export default ProjectContent;