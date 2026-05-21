import {z} from "zod";
import type {taskPrioritySchema} from "@/features/task/schemas/task-priority.schema.ts";

export type TaskPriority =
    z.infer<typeof taskPrioritySchema>;