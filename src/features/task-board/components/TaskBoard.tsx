import TaskColumn from "@/features/task-board/components/TaskColumn.tsx";

const TaskBoard = () => {
    return (
        <div className={"h-full overflow-x-auto flex gap-4"}>
            <TaskColumn status={"todo"}/>
            <TaskColumn status={"in_progress"}/>
            <TaskColumn status={"completed"}/>
        </div>
    );
};

export default TaskBoard;