import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";

const TaskBoard = () => {
    return (
        <div className={"h-full overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
            <TaskColumn status={"todo"}/>
            <TaskColumn status={"in_progress"}/>
            <TaskColumn status={"completed"}/>
        </div>
    );
};

export default TaskBoard;