import type {TaskCardMenuItem} from "@/features/task/types/task-card-menu-item.type.ts";
import type {Task} from "@/features/task/types/task.type.ts";
import {TASK_CARD_MENU} from "@/features/task/constants/task-card-menu.constant.ts";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
type TaskCardMenuProps = {
    task: Task;
}
const TaskCardMenu = ({task}: TaskCardMenuProps) => {

    const handleSelectMenuItem = (value: TaskCardMenuItem)=> {
        switch (value) {
            case "edit":
                break;
            case "move":
                break;
            case "remove":
                break;
        }
    }
    return (
        <>
            {TASK_CARD_MENU.map(item => (
                <DropdownItem key={item.value} onClick={() => {
                    handleSelectMenuItem(item.value)
                }}>
                    <span className={"flex items-center w-full"}>
                        {item.label}
                    </span>
                </DropdownItem>
            ))}
        </>
    );
};

export default TaskCardMenu;