import type {Task} from "@/features/task/types/task.type.ts";
import {isBefore, startOfDay} from "date-fns";

export const isTaskOverdue = (task: Task) => {
    return (
        task.status !== "completed" &&
            isBefore(new Date(task.due_date), startOfDay(new Date()))
    )
}