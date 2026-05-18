import TaskBoard from "@/features/task-board/components/TaskBoard.tsx";

const ProjectContent = () => {
    return (
        <main className={"flex-1 overflow-hidden"}>
            <TaskBoard/>
        </main>
    );
};

export default ProjectContent;