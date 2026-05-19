import type {TaskCardMenuItem} from "@/features/task/types/task-card-menu-item.type.ts";

export const TASK_CARD_MENU: {label: string; value: TaskCardMenuItem}[] = [
    {
        label: "Edit",
        value: "edit"
    },
    {
        label: "Move Task",
        value: "move"
    },
    {
        label: "Remove",
        value: "remove"
    }
]