import {TASK_PRIORITY_VALUES} from "@/features/task/utils/task-priority.util.ts";
import {z} from "zod";

export const taskPrioritySchema =
    z.enum(TASK_PRIORITY_VALUES);
