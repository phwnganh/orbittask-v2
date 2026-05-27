import type {CreateTaskFormValues, EditTaskFormValues} from "@/features/task/schemas/task.schema.ts";
import {supabase} from "@/shared/libs/supabase.ts";
import type {TaskStatus} from "@/features/task/types/task.type.ts";
import type {TaskBoardSortBy} from "@/features/task-board/types/task-board-menu-item.type.ts";

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

type ViewTasksByStatusParams = {
    status: TaskStatus;
    projectId: string;
    sortBy?: TaskBoardSortBy;
}
export const viewAllTasksByStatusApi = async ({status, projectId, sortBy = "newest"}: ViewTasksByStatusParams) => {
    const {data: tasks, error} = await supabase.rpc("get_all_tasks_by_status", {
        p_project_id: projectId,
        p_status: status,
        p_sort_by: sortBy,
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
    const {data: task, error} = await supabase.rpc("remove_task", {
        p_task_id: task_id,
    });
    if(error){
        throw error;
    }
    return task;
}