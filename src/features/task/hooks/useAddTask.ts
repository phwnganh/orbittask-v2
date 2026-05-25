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
            await cancel(taskKeys.list({project_id: payload.project_id, status: payload.status}))
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
            setMany<Task[]>(taskKeys.list({project_id: payload.project_id, status: payload.status}), (old)=> {
                if(!old) return [optimisticTask]

                return [
                    optimisticTask,
                    ...old,
                ]
            })
            return {tempId}
        },
        onError: (_err, _vars, context) => {
            setMany<Task[]>(taskKeys.list({project_id: _vars.project_id, status: _vars.status}), old => {
                if(!old) return old;
                return old.filter(task => task.id !== context?.tempId)
            })
        },
        onSuccess: (result, _vars, context) => {
            setMany<Task[]>(taskKeys.list({project_id: _vars.project_id, status: _vars.status}), (old) => {
                if(!old) return old

                return old.map(task => task.id === context?.tempId ? result : task);
            })
        },
        onSettled: (_data, _err, vars) => {
            void invalidate(taskKeys.list({project_id: vars.project_id, status: vars.status}))
        }
    })
}