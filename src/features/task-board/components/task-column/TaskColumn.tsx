import TaskColumnHeader from "@/features/task-board/components/task-column/TaskColumnHeader.tsx";
import TaskColumnList from "@/features/task-board/components/task-column/TaskColumnList.tsx";
import AddTaskButton from "@/features/task-board/components/AddTaskButton.tsx";

type TaskColumnProps = {
    status: string;
}
const TaskColumn = ({status}: TaskColumnProps) => {
    return (
        <div className={"flex h-full overflow-y-auto scrollbar-custom flex-col gap-4 max-w-88 w-full shrink-0 bg-bg-secondary/80 border border-border-primary shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md rounded-lg p-4"}>
            <TaskColumnHeader status={status}/>
            <div className={"flex-1 overflow-y-auto"}>
                <TaskColumnList/>
            </div>
            <AddTaskButton />
        </div>
    );
};

export default TaskColumn;