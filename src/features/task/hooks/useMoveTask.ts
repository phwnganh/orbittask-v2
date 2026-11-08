import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";
import {moveTaskApi} from "@/features/task/services/task.api.ts";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";

export const useMoveTask = () => {
    const {get, set, cancel, invalidate} = useReactQueryClient()

    return useMutation({
        mutationFn: ({task_id, new_status}: {task_id: string, project_id: string, old_status: TaskStatus, new_status: TaskStatus}) => moveTaskApi(task_id, new_status),
        onMutate: async ({task_id, project_id, old_status, new_status}) => {
            await cancel(taskKeys.list(project_id, old_status))
            await cancel(taskKeys.list(project_id, new_status))

            const oldTasks = get<Task[]>(taskKeys.list(project_id, old_status))
            const movingTask = oldTasks?.find(task => task.id === task_id)

            if(!movingTask) return {task_id, project_id, old_status, new_status}

            const updatedTask = {...movingTask, status: new_status}

            set<Task[]>(taskKeys.list(project_id, old_status), old => 
                old?.filter(task => task.id !== task_id) ?? []
            )
            set<Task[]>(taskKeys.list(project_id, new_status), old =>
                [updatedTask, ...(old ?? [])]
            )
            return {
                task_id,
                project_id,
                old_status,
                new_status,
            }
        },
        onError: (_err, vars) => {
            void invalidate(taskKeys.lists(vars.project_id))
        },
        onSettled: (_data, _err, vars) => {
            void invalidate(taskKeys.lists(vars.project_id))
        }
    })
}