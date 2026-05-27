import DropdownSubmenu from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownSubmenuTrigger from "@/shared/components/dropdown/DropdownSubmenuTrigger.tsx";
import DropdownSubmenuContent from "@/shared/components/dropdown/DropdownSubmenuContent.tsx";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import {useTaskBoardStore} from "@/features/task-board/stores/task-board.store.ts";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskColumnDueDateSubmenuProps = {
    label: string;
    status: Task["status"];
}
const TaskColumnDueDateSubmenu = ({label, status}: TaskColumnDueDateSubmenuProps) => {
    const {setSort} = useTaskBoardStore()
    return (
        <DropdownSubmenu>
            <DropdownSubmenuTrigger>{label}</DropdownSubmenuTrigger>
            <DropdownSubmenuContent>
                <DropdownItem onClick={() => setSort(status, "due_date_earliest")}>Earliest</DropdownItem>
                <DropdownItem onClick={() => setSort(status, "due_date_latest")}>Latest</DropdownItem>
            </DropdownSubmenuContent>
        </DropdownSubmenu>
    );
};

export default TaskColumnDueDateSubmenu;