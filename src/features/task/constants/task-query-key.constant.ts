import type {TaskStatus} from "@/features/task/types/task.type.ts";

export const taskKeys = {
    all: ["tasks"] as const,
    project: (project_id?: string) => [...taskKeys.all, project_id] as const,
    lists: (project_id?: string) => [...taskKeys.project(project_id), "list"] as const,
    list: ({project_id, status}: {
        project_id?: string;
        status: TaskStatus
    }) => [...taskKeys.lists(project_id), {status}] as const,
}