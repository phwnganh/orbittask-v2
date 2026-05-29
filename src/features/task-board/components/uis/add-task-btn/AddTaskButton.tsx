import Button from "@/shared/components/button/Button.tsx";
import PlusIcon from '@/assets/icons/plus-icon.svg?react'
import {useTaskStore} from "@/features/task/stores/task.store.ts";
import type {Task} from "@/features/task/types/task.type.ts";

type AddTaskButtonProps = {
    status: Task["status"];
}
const AddTaskButton = ({status}: AddTaskButtonProps) => {
    const {onOpenAddTaskModal} = useTaskStore()
    return (
        <Button variant={"dashed"} onClick={() => onOpenAddTaskModal(status)}>
            <div className={"flex justify-center items-center w-4 h-4 shrink-0"}>
                <PlusIcon className={"text-text-primary w-4 h-4"}/>
            </div>
            <span>Add Task</span>
        </Button>
    );
};

export default AddTaskButton;