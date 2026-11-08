import {z} from "zod";
import {isAfter} from "date-fns";

export const baseTaskSchema = z.object({
    title: z.string().trim().min(1, "Title is required"),
    description: z.string().trim().optional(),
    priority: z.enum(["low", "medium", "high"]).optional(),
})

export const createTaskSchema = baseTaskSchema.extend({
    assignee_id: z.string(),
    start_date: z.date(),
    due_date: z.date().refine(date => isAfter(date, new Date()), "Due date must be in the future"),
    project_id: z.string(),
    status: z.enum(["todo", "in_progress", "completed"]),
})

export const editTaskSchema = baseTaskSchema.extend({
    due_date: z.date(),
    assignee_id: z.string(),
})

export type CreateTaskFormValues = z.infer<typeof createTaskSchema>
export type EditTaskFormValues = z.infer<typeof editTaskSchema>
