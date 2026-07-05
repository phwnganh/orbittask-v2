import type {TaskPriority, TaskStatus} from "@/features/task/types/task.type.ts";

export const getTaskActivityPriorityDisplayed = (priority: TaskPriority) => {
    switch (priority) {
        case "low":
            return "Low";
        case "medium":
            return "Medium";
        case "high":
            return "High";
    }
}