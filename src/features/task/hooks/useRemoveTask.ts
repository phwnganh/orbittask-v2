import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {removeTaskApi} from "@/features/task/services/task.api.ts";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";
import type {Task} from "@/features/task/types/task.type.ts";

export const useRemoveTask = () => {
    const {setMany, cancel, invalidate} = useReactQueryClient()
    return useMutation({
        mutationFn: ({task_id}: {task_id: string, project_id: string}) => removeTaskApi(task_id),
        onMutate: async ({project_id, task_id}) => {
            await cancel(taskKeys.lists(project_id))
            setMany(taskKeys.lists(project_id), (old: Task[] | undefined) => {
                if(!old) return old;
                return old.filter(task => task.id !== task_id)
            })
            return {task_id, project_id}
        },
        onError: (_err, _vars) => {
            void invalidate(taskKeys.lists(_vars.project_id))
        },
        onSettled: (_data, _err, context) => {
            void invalidate(taskKeys.lists(context.project_id))
        }
    })
}