import type {TaskBoardMenuItem} from "@/features/task-board/types/task-board-menu-item.type.ts";

export const TASK_BOARD_MENU: {label: string; value: TaskBoardMenuItem}[] = [
    {
        label: "Newest",
        value: "newest"
    },
    {
        label: "Oldest",
        value: "oldest"
    },
    {
        label: "Priority",
        value: "priority"
    },
    {
        label: "Due Date",
        value: "due_date"
    },
    {
        label: "Title",
        value: "title"
    }
]