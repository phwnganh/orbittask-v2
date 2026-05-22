import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";
import {useQuery} from "@tanstack/react-query";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";
import {viewAllTasksByStatusApi} from "@/features/task/services/task.api.ts";

export const useViewTasks = ({project_id, status}: {project_id?: string, status: TaskStatus}) => {
    return useQuery<Task[]>({
        queryKey: taskKeys.list({project_id, status}),
        queryFn: () => viewAllTasksByStatusApi(status, project_id)
    })
}