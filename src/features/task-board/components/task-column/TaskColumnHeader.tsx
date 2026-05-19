import {getTaskStatusHeader} from "@/features/task-board/utils/task-board.util.ts";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";

type TaskColumnHeaderProps = {
    status: string
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
            </Dropdown>
        </div>
    );
};

export default TaskColumnHeader;