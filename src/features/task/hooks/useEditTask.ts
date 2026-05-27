import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {editTaskApi, type EditTaskPayload} from "@/features/task/services/task.api.ts";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";
import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";

export const useEditTask = () => {
    const {setMany, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({task_id, payload}:{task_id: string, project_id: string, status: TaskStatus,  payload: EditTaskPayload}) => editTaskApi(task_id, payload),
        onMutate: async({task_id, project_id, payload}) => {
            await cancel(taskKeys.lists(project_id))

            setMany(taskKeys.lists(project_id), (old: Task[] | undefined) => {
                if(!old) return old;

                return old.map(task => task.id === task_id ? {
                    ...task,
                    title: payload.title,
                    description: payload.description ?? task.description,
                    priority: payload.priority ?? task.priority,
                    due_date: payload.due_date ?? task.due_date,
                    assignee_id: payload.assignee_id,
                } : task)
            })
            return {project_id}
        },
        onError: (_err, _vars) => {
            void invalidate(taskKeys.lists(_vars.project_id))
        },
        onSettled: (_data, _err, vars) => {
            void invalidate(taskKeys.lists(vars.project_id))
        }
    })
}