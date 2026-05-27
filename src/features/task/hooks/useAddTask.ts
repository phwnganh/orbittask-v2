import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {useMutation} from "@tanstack/react-query";
import {addTaskApi} from "@/features/task/services/task.api.ts";
import {taskKeys} from "@/features/task/constants/task-query-key.constant.ts";
import type {Task} from "@/features/task/types/task.type.ts";
import {useSession} from "@/features/auth/hooks/useSession.ts";

export const useAddTask = () => {
    const {setMany, cancel, invalidate} = useReactQueryClient()
    const {data: session} = useSession()
    const user = session?.user;
    return useMutation({
        mutationFn: addTaskApi,
        onMutate: async (payload) => {
            if(!user) throw new Error("Unauthenticated")
            await cancel(taskKeys.lists(payload.project_id))
            const tempId = crypto.randomUUID()
            const optimisticTask = {
                id: tempId,
                project_id: payload.project_id,
                title: payload.title,
                description: payload.description ?? "",
                assignee_id: payload.assignee_id,
                priority: (payload.priority ?? "medium") as Task["priority"],
                start_date: payload.start_date,
                due_date: payload.due_date,
                status: payload.status as Task["status"],
                created_by: user.id
            }
            setMany<Task[]>(taskKeys.lists(payload.project_id), (old)=> {
                if(!old) return [optimisticTask]

                const queryHasMatchingStatus = old.some(t => t.status === payload.status) || old.length === 0
                if(!queryHasMatchingStatus) return old
                return [optimisticTask, ...old]
            })
            return {tempId}
        },
        onError: (_err, _vars, context) => {
            setMany<Task[]>(taskKeys.lists(_vars.project_id), old => {
                if(!old) return old;
                return old.filter(task => task.id !== context?.tempId)
            })
        },
        onSuccess: (result, _vars, context) => {
            setMany<Task[]>(taskKeys.lists(_vars.project_id), (old) => {
                if(!old) return old

                return old.map(task => task.id === context?.tempId ? result : task);
            })
        },
        onSettled: (_data, _err, vars) => {
            void invalidate(taskKeys.lists(vars.project_id))
        }
    })
}