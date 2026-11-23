import DropdownSubmenu from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownSubmenuTrigger from "@/shared/components/dropdown/DropdownSubmenuTrigger.tsx";
import DropdownSubmenuContent from "@/shared/components/dropdown/DropdownSubmenuContent.tsx";
import { useTaskBoardStore } from "@/features/task-board/stores/task-board.store.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import DropdownSelectedItem from "@/shared/components/dropdown/DropdownSelectedItem";

type TaskColumnDueDateSubmenuProps = {
  label: string;
  status: Task["status"];
};
const TaskColumnDueDateSubmenu = ({
  label,
  status,
}: TaskColumnDueDateSubmenuProps) => {
  const { setSort, sorts } = useTaskBoardStore();
  return (
    <DropdownSubmenu>
      <DropdownSubmenuTrigger>{label}</DropdownSubmenuTrigger>
      <DropdownSubmenuContent>
        <DropdownSelectedItem
          selected={sorts[status] === "due_date_earliest"}
          onClick={() => setSort(status, "due_date_earliest")}
        >
          Earliest
        </DropdownSelectedItem>

        <DropdownSelectedItem
          selected={sorts[status] === "due_date_latest"}
          onClick={() => setSort(status, "due_date_latest")}
        >
          Latest
        </DropdownSelectedItem>
      </DropdownSubmenuContent>
    </DropdownSubmenu>
  );
};

export default TaskColumnDueDateSubmenu;
