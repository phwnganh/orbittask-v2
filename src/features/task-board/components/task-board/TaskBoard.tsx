import TaskColumn from "@/features/task-board/components/task-column/TaskColumn.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import AddTaskModal from "@/features/task/components/task-modal/add-task/AddTaskModal.tsx";
import {useTaskStore} from "@/features/task/stores/task.store.ts";
import EditTaskModal from "@/features/task/components/task-modal/edit-task/EditTaskModal.tsx";
import type {Profile} from "@/features/auth/types/auth.type.ts";
import RemoveTaskModal from "@/features/task/components/task-modal/remove-task/RemoveTaskModal.tsx";
import {useMoveTask} from "@/features/task/hooks/useMoveTask.ts";
import {
    DndContext,
    type DragEndEvent,
    DragOverlay,
    type DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";
import {useState} from "react";
import TaskCard from "@/features/task/components/task-card/TaskCard.tsx";

type TaskBoardProps = {
    users?: Member[]
    projectId?: string;
    me?: Profile | null;
}
const TaskBoard = ({users, projectId, me}: TaskBoardProps) => {
    const {addTaskModal, onCloseAddTaskModal, isEditTaskModalOpen, onCloseEditTaskModal, isDeleteTaskModalOpen, onCloseDeleteTaskModal} = useTaskStore()
    const [activeTask, setActiveTask] = useState<Task | null>(null)
    const {mutate} = useMoveTask()

    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8
        }
    }))

    const handleDragStart = (e: DragStartEvent) => {
        setActiveTask(e.active.data.current?.task as Task)
    }

    const handleDragEnd = (e: DragEndEvent) => {
        const {active, over} = e

        if(!activeTask) {
            setActiveTask(null)
            return;
        }

        setActiveTask(null)
        if(!over) return;

        const oldStatus = activeTask.status as TaskStatus;
        const newStatus = over.id as TaskStatus;
        if(oldStatus === newStatus) return;

        mutate({
            task_id: active.id as string,
            project_id: projectId!,
            old_status: oldStatus,
            new_status: newStatus
        })
    }
    return (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className={"h-full min-h-0 overflow-x-auto flex gap-4 pb-2 scrollbar-custom"}>
                <TaskColumn projectId={projectId} status={"todo"}/>
                <TaskColumn projectId={projectId} status={"in_progress"}/>
                <TaskColumn projectId={projectId} status={"completed"}/>
                <AddTaskModal me={me} status={addTaskModal.defaultStatus} isOpen={addTaskModal.isOpen} onClose={onCloseAddTaskModal} users={users} projectId={projectId}/>
                <EditTaskModal isOpen={isEditTaskModalOpen} onClose={onCloseEditTaskModal} users={users} me={me}/>
                <RemoveTaskModal isOpen={isDeleteTaskModalOpen} onClose={onCloseDeleteTaskModal}/>
            </div>

            <DragOverlay>
                {activeTask ? (
                    <TaskCard task={activeTask} isDragOverlay/>
                ) : null}
            </DragOverlay>
        </DndContext>

    );
};

export default TaskBoard;