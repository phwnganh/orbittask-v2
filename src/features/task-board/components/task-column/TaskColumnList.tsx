import TaskCard from "@/features/task/components/task-card/TaskCard.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import EditTaskModal from "@/features/task/components/task-modal/edit-task/EditTaskModal.tsx";
import {useTaskStore} from "@/features/task/stores/task.store.ts";

type TaskColumnListProps = {
    tasks?: Task[]
}
const TaskColumnList = ({tasks}: TaskColumnListProps) => {
    const {isEditTaskModalOpen, onCloseEditTaskModal} = useTaskStore()
    return (
        <>
            <div className={"flex flex-col gap-2 p-2"}>
                {tasks?.map(task =>
                    <TaskCard key={task.id} task={task}/>
                )}
            </div>
            <EditTaskModal isOpen={isEditTaskModalOpen} onClose={onCloseEditTaskModal}/>
        </>

    );
};

export default TaskColumnList;