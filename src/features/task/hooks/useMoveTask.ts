import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";
import {moveTaskApi} from "@/features/task/services/task.api.ts";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";

export const useMoveTask = () => {
    const {getMany, setMany, cancel, invalidate} = useReactQueryClient()

    return useMutation({
        mutationFn: ({task_id, new_status}: {task_id: string, project_id: string, old_status: TaskStatus, new_status: TaskStatus}) => moveTaskApi(task_id, new_status),
        onMutate: async ({task_id, project_id, old_status, new_status}) => {
            await cancel(taskKeys.lists(project_id))

            const allQueries = getMany<Task[]>(taskKeys.lists(project_id))
            const movingTask = allQueries.flatMap(([, data]) => data ?? [])
                .find(task => task.id === task_id)

            if(!movingTask) return {task_id, project_id, old_status, new_status}

            const updatedTask = {...movingTask, status: new_status}

            setMany<Task[]>(taskKeys.lists(project_id), old => {
                if(!old) return old;

                if(old.some(task => task.status === old_status)){
                    return old.filter(task => task.id !== task_id);
                }

                if(old.length === 0 || old.some(task => task.status === new_status)){
                    return [updatedTask, ...old]
                }
                return old;
            })

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