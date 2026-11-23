import DropdownSubmenu from "@/shared/components/dropdown/DropdownSubmenu.tsx";
import DropdownSubmenuTrigger from "@/shared/components/dropdown/DropdownSubmenuTrigger.tsx";
import DropdownSubmenuContent from "@/shared/components/dropdown/DropdownSubmenuContent.tsx";
import { useTaskBoardStore } from "@/features/task-board/stores/task-board.store.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import DropdownSelectedItem from "@/shared/components/dropdown/DropdownSelectedItem";

type TaskColumnTitleSubmenuProps = {
  label: string;
  status: Task["status"];
};
const TaskColumnTitleSubmenu = ({
  label,
  status,
}: TaskColumnTitleSubmenuProps) => {
  const { setSort, sorts } = useTaskBoardStore();
  return (
    <DropdownSubmenu>
      <DropdownSubmenuTrigger>{label}</DropdownSubmenuTrigger>
      <DropdownSubmenuContent>
        <DropdownSelectedItem
          selected={sorts[status] === "title_a_z"}
          onClick={() => setSort(status, "title_a_z")}
        >
          A to Z
        </DropdownSelectedItem>
        <DropdownSelectedItem
          selected={sorts[status] === "title_z_a"}
          onClick={() => setSort(status, "title_z_a")}
        >
          Z to A
        </DropdownSelectedItem>
      </DropdownSubmenuContent>
    </DropdownSubmenu>
  );
};

export default TaskColumnTitleSubmenu;
