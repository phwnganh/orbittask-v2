import {getTaskStatusHeader} from "@/features/task-board/utils/task-board.util.ts";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import TaskColumnMenu from "@/features/task-board/components/task-column-menu/TaskColumnMenu.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskColumnHeaderProps = {
    status: Task["status"];
}
const TaskColumnHeader = ({status}: TaskColumnHeaderProps) => {
    return (
        <div className={"flex items-center justify-between"}>
            <div className={"flex items-center gap-2"}>
                <Badge variant={"info"}>
                    {getTaskStatusHeader(status)}
                </Badge>
                <span className={"text-sm text-text-secondary"}>12</span>
            </div>
            <Dropdown>
                <DropdownTrigger>
                    {(props) => <MenuDotsButton {...props}/>}
                </DropdownTrigger>
                <DropdownContent>
                    <TaskColumnMenu status={status}/>
                </DropdownContent>
            </Dropdown>
        </div>
    );
};

export default TaskColumnHeader;