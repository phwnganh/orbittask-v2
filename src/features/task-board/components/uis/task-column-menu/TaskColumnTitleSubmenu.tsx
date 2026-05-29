import DropdownSubmenu from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownSubmenuTrigger from "@/shared/components/dropdown/DropdownSubmenuTrigger.tsx";
import DropdownSubmenuContent from "@/shared/components/dropdown/DropdownSubmenuContent.tsx";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import {useTaskBoardStore} from "@/features/task-board/stores/task-board.store.ts";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskColumnTitleSubmenuProps = {
    label: string;
    status: Task["status"];
}
const TaskColumnTitleSubmenu = ({label, status}: TaskColumnTitleSubmenuProps) => {
    const {setSort} = useTaskBoardStore()
    return (
        <DropdownSubmenu>
            <DropdownSubmenuTrigger>{label}</DropdownSubmenuTrigger>
            <DropdownSubmenuContent>
                <DropdownItem onClick={() => setSort(status, "title_a_z")}>A to Z</DropdownItem>
                <DropdownItem onClick={() => setSort(status, "title_z_a")}>Z to A</DropdownItem>
            </DropdownSubmenuContent>
        </DropdownSubmenu>
    );
};

export default TaskColumnTitleSubmenu;