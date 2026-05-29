import type {Task} from "@/features/task/types/task.type.ts";
import {isTaskOverdue} from "@/features/my-tasks/utils/calendar.util.ts";

export const sortTasksByAttention = (tasks: Task[]) => {
    return [...tasks].sort((a, b) => {
        const aOverdue = isTaskOverdue(a)
        const bOverdue = isTaskOverdue(b)

        if(aOverdue && !bOverdue) return -1;
        if(!aOverdue && bOverdue) return 1;

        if(a.status === "in_progress" && b.status !== "in_progress") return -1;

        if(a.status !== "in_progress" && b.status === "in_progress") return 1;

        return 0;
    })
}