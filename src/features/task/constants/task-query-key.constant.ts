import type {TaskStatus} from "@/features/task/types/task.type.ts";
import type {TaskBoardSortBy} from "@/features/task-board/types/task-board-menu-item.type.ts";

export const taskKeys = {
    all: ["tasks"] as const,
    project: (project_id?: string) => [...taskKeys.all, project_id] as const,
    lists: (project_id?: string) => [...taskKeys.project(project_id), "list"] as const,
    list: (
        project_id: string | undefined,
        status: TaskStatus,
        sort_by?: TaskBoardSortBy
    ) => [...taskKeys.lists(project_id), status, sort_by] as const,
}