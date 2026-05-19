import {z} from "zod";
import {isAfter} from "date-fns";

export const taskSchema = z.object({
    title: z.string().trim().min(1, "Title is required"),
    description: z.string().trim().optional(),
    start_date: z.date(),
    due_date: z.date().refine(date => isAfter(date, new Date()), "Due date must be in the future"),
    assignee_id: z.string(),
    priority: z.string().optional()
})

export type TaskFormValues = z.infer<typeof taskSchema>
