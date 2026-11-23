import DropdownSubmenu from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownSubmenuTrigger from "@/shared/components/dropdown/DropdownSubmenuTrigger.tsx";
import DropdownSubmenuContent from "@/shared/components/dropdown/DropdownSubmenuContent.tsx";
import { useTaskBoardStore } from "@/features/task-board/stores/task-board.store.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import DropdownSelectedItem from "@/shared/components/dropdown/DropdownSelectedItem";

type TaskColumnPrioritySubmenuProps = {
  label: string;
  status: Task["status"];
};
const TaskColumnPrioritySubmenu = ({
  label,
  status,
}: TaskColumnPrioritySubmenuProps) => {
  const { setSort, sorts } = useTaskBoardStore();
  return (
    <DropdownSubmenu>
      <DropdownSubmenuTrigger>{label}</DropdownSubmenuTrigger>

      <DropdownSubmenuContent>
        <DropdownSelectedItem
          selected={sorts[status] === "priority_high_to_low"}
          onClick={() => setSort(status, "priority_high_to_low")}
        >
          High to Low
        </DropdownSelectedItem>
        <DropdownSelectedItem
          selected={sorts[status] === "priority_low_to_high"}
          onClick={() => setSort(status, "priority_low_to_high")}
        >
          Low to High
        </DropdownSelectedItem>
      </DropdownSubmenuContent>
    </DropdownSubmenu>
  );
};

export default TaskColumnPrioritySubmenu;
