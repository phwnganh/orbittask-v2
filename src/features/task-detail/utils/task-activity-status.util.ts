import type {TaskStatus} from "@/features/task/types/task.type.ts";

export const getTaskActivityStatusDisplayed = (status: TaskStatus) => {
    switch (status) {
        case "todo":
            return "Todo";
        case "in_progress":
            return "In Progress";
        case "completed":
            return "Completed";
    }
}