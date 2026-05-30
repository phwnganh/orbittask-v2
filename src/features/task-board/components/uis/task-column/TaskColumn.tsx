import TaskColumnHeader from "@/features/task-board/components/uis/task-column/TaskColumnHeader.tsx";
import TaskColumnList from "@/features/task-board/components/uis/task-column/TaskColumnList.tsx";
import AddTaskButton from "@/features/task-board/components/uis/add-task-btn/AddTaskButton.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import {useViewTasks} from "@/features/task/hooks/useViewTasks.ts";
import {useTaskBoardStore} from "@/features/task-board/stores/task-board.store.ts";
import {useDroppable} from "@dnd-kit/core";

type TaskColumnProps = {
    status: Task["status"];
    projectId?: string;
}
const TaskColumn = ({status, projectId}: TaskColumnProps) => {
    const sort = useTaskBoardStore(state => state.sorts[status])
    const {data: tasks} = useViewTasks({project_id: projectId, status: status, sort_by: sort})
    const {setNodeRef, isOver} = useDroppable({id: status})
    return (
        <div className={"flex h-full min-h-0 overflow-y-auto scrollbar-custom flex-col gap-4 max-w-88 w-full shrink-0 bg-bg-secondary/80 border border-border-primary shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md rounded-lg p-4"}>
            <TaskColumnHeader status={status} tasks={tasks}/>
            <div ref={setNodeRef} className={`flex-1 min-h-0 overflow-y-auto scrollbar-custom duration-200 ${
                isOver ? "bg-bg-tertiary/60 rounded-lg" : ""
            }`}>
                <TaskColumnList tasks={tasks}/>
            </div>
            <AddTaskButton status={status}/>
        </div>
    );
};

export default TaskColumn;