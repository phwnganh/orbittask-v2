import type {CreateTaskFormValues, EditTaskFormValues} from "@/features/task/schemas/task.schema.ts";
import {supabase} from "@/shared/libs/supabase.ts";
import type {TaskStatus} from "@/features/task/types/task.type.ts";

export type CreateTaskPayload = Omit<CreateTaskFormValues, "start_date" | "due_date"> & {
    start_date: string;
    due_date: string;
}

export type EditTaskPayload = Omit<
    EditTaskFormValues,
    "due_date"
> & {
    due_date: string;
}
export const addTaskApi = async (payload: CreateTaskPayload)=> {
    const {data: task, error} = await supabase.rpc("create_task", {
        p_title: payload.title,
        p_description: payload.description ?? "",
        p_assignee_id: payload.assignee_id,
        p_priority: payload.priority ?? "medium",
        p_start_date: payload.start_date,
        p_due_date: payload.due_date,
        p_project_id: payload.project_id,
        p_status: payload.status,
    });

    if(error){
        throw error;
    }
    return task;
}

export const viewAllTasksByStatusApi = async (status: TaskStatus, projectId?: string) => {
    const {data: tasks, error} = await supabase.from("Tasks").select(`*, assignee:Profile!Tasks_assignee_id_fkey(*)`).eq("project_id", projectId).eq("status", status).order("created_at", {
        ascending: false
    })

    if(error){
        throw error;
    }
    return tasks;
}

export const editTaskApi = async (task_id: string, payload: EditTaskPayload) => {
    const {data: task, error} = await supabase.rpc("edit_task", {
        p_task_id: task_id,
        p_title: payload.title,
        p_description: payload.description,
        p_assignee_id: payload.assignee_id,
        p_priority: payload.priority,
        p_due_date: payload.due_date,
    });

    if(error){
        throw error;
    }
    return task;
}

export const removeTaskApi = async (task_id: string) => {
    const {data: task, error} = await supabase.from("Tasks").delete().eq("id", task_id).select().single();
    if(error){
        throw error;
    }
    return task;
}