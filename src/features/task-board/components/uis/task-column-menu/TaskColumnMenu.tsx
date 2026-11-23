import type { TaskBoardMenuItem } from "@/features/task-board/types/task-board-menu-item.type.ts";
import { TASK_BOARD_MENU } from "@/features/task-board/constants/task-board-menu.constant.ts";
import TaskColumnPrioritySubmenu from "@/features/task-board/components/uis/task-column-menu/TaskColumnPrioritySubmenu.tsx";
import TaskColumnDueDateSubmenu from "@/features/task-board/components/uis/task-column-menu/TaskColumnDueDateSubmenu.tsx";
import TaskColumnTitleSubmenu from "@/features/task-board/components/uis/task-column-menu/TaskColumnTitleSubmenu.tsx";
import { useTaskBoardStore } from "@/features/task-board/stores/task-board.store.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import DropdownSelectedItem from "@/shared/components/dropdown/DropdownSelectedItem";

type TaskColumnMenuProps = {
  status: Task["status"];
};
const TaskColumnMenu = ({ status }: TaskColumnMenuProps) => {
  const { setSort, sorts } = useTaskBoardStore();
  const handleSelectMenuItem = (value: TaskBoardMenuItem) => {
    switch (value) {
      case "newest":
        setSort(status, "newest");
        break;
      case "oldest":
        setSort(status, "oldest");
        break;
    }
  };

  return (
    <>
      {TASK_BOARD_MENU.map((item) => {
        switch (item.value) {
          case "priority":
            return (
              <TaskColumnPrioritySubmenu
                key={item.value}
                status={status}
                label={item.label}
              />
            );
          case "due_date":
            return (
              <TaskColumnDueDateSubmenu
                key={item.value}
                status={status}
                label={item.label}
              />
            );
          case "title":
            return (
              <TaskColumnTitleSubmenu
                key={item.value}
                status={status}
                label={item.label}
              />
            );
          default:
            return (
              <DropdownSelectedItem
                selected={item.value === sorts[status]}
                onClick={() => {
                  handleSelectMenuItem(item.value);
                }}
              >
                {item.label}
              </DropdownSelectedItem>
            );
        }
      })}
    </>
  );
};

export default TaskColumnMenu;
