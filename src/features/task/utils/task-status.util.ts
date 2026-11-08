import type {TaskStatus} from "@/features/task/types/task.type.ts";

export const getTaskStatusBadgeVariant = (status: TaskStatus) => {
    switch (status) {
        case "todo":
            return "info";
        case "in_progress":
            return "warning";
        case "completed":
            return "success";
    }
}