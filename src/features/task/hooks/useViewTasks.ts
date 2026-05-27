import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";
import {viewAllTasksByStatusApi} from "@/features/task/services/task.api.ts";
import type {TaskBoardSortBy} from "@/features/task-board/types/task-board-menu-item.type.ts";

export const useViewTasks = ({project_id, status, sort_by}: {project_id?: string, status: TaskStatus, sort_by?: TaskBoardSortBy}) => {
    return useQuery<Task[]>({
        queryKey: taskKeys.list(project_id, status, sort_by),
        queryFn: () => viewAllTasksByStatusApi({status: status, projectId: project_id!, sortBy: sort_by}),
        placeholderData: keepPreviousData,
    })
}