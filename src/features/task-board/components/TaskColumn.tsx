import TaskColumnHeader from "@/features/task-board/components/TaskColumnHeader.tsx";
import TaskColumnList from "@/features/task-board/components/TaskColumnList.tsx";
import AddTaskButton from "@/features/task-board/components/AddTaskButton.tsx";

type TaskColumnProps = {
    status: string;
}
const TaskColumn = ({status}: TaskColumnProps) => {
    return (
        <div className={"flex h-full flex-col gap-4 w-150 bg-bg-tertiary rounded-lg"}>
            <TaskColumnHeader status={status}/>
            <div className={"flex-1 overflow-y-auto"}>
                <TaskColumnList/>
            </div>
            <AddTaskButton />
        </div>
    );
};

export default TaskColumn;