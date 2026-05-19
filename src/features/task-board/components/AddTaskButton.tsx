import Button from "@/shared/components/button/Button.tsx";
import PlusIcon from '@/assets/icons/plus-icon.svg?react'
const AddTaskButton = () => {
    return (
        <Button variant={"dashed"}>
            <div className={"flex justify-center items-center w-4 h-4 shrink-0"}>
                <PlusIcon className={"text-text-primary"}/>
            </div>
            <span>Add Task</span>
        </Button>
    );
};

export default AddTaskButton;