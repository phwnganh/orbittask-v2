import DropdownSubmenu from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownSubmenuTrigger from "@/shared/components/dropdown/DropdownSubmenuTrigger.tsx";
import DropdownSubmenuContent from "@/shared/components/dropdown/DropdownSubmenuContent.tsx";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import {useTaskBoardStore} from "@/features/task-board/stores/task-board.store.ts";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskColumnPrioritySubmenuProps = {
    label: string;
    status: Task["status"];
}
const TaskColumnPrioritySubmenu = ({label, status}: TaskColumnPrioritySubmenuProps) => {
    const {setSort} = useTaskBoardStore()
    return (
        <DropdownSubmenu>
            <DropdownSubmenuTrigger>{label}</DropdownSubmenuTrigger>

            <DropdownSubmenuContent>
                <DropdownItem onClick={() => setSort(status, "priority_high_to_low")}>High to Low</DropdownItem>
                <DropdownItem onClick={() => setSort(status, "priority_low_to_high")}>Low to High</DropdownItem>
            </DropdownSubmenuContent>
        </DropdownSubmenu>
    );
};

export default TaskColumnPrioritySubmenu;