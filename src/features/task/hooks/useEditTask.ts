import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {editTaskApi} from "@/features/task/services/task.api.ts";
import type {EditTaskFormValues} from "@/features/task/schemas/task.schema.ts";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";
import type {Task, TaskStatus} from "@/features/task/types/task.type.ts";

export const useEditTask = () => {
    const {setMany, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({task_id,payload}:{task_id: string, project_id: string, status: TaskStatus, payload: EditTaskFormValues}) => editTaskApi(task_id, payload),
        onMutate: async({task_id, project_id, status, payload}) => {
            await cancel(taskKeys.list({project_id: project_id, status: status}))

            setMany(taskKeys.list({project_id, status}), (old: Task[] | undefined) => {
                if(!old) return old;

                return old.map(task => task.id === task_id ? {
                    ...task,
                    title: payload.title,
                    description: payload.description ?? task.description,
                    priority: payload.priority ?? task.priority,
                    due_date: payload.due_date?.toISOString() ?? task.due_date,
                    assignee_id: payload.assignee_id,
                } : task)
            })
            return {project_id}
        },
        onError: (_err, _vars) => {
            void invalidate(taskKeys.list({project_id: _vars.project_id, status: _vars.status}))
        },
        onSettled: (_data, _err, vars) => {
            void invalidate(taskKeys.list({project_id: vars.project_id, status: vars.status}))
        }
    })
}