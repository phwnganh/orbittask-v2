import {useForm} from "react-hook-form";
import {
    type TaskFormValues,
    taskSchema
} from "@/features/task/schemas/task.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import FormModal from "@/shared/components/modal/FormModal.tsx";
import TaskFormFields from "@/features/task/components/task-form/TaskFormFields.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import type {MemberResponse} from "@/features/member/types/member.type.ts";
import {useAddTask} from "@/features/task/hooks/useAddTask.ts";
import {useEffect} from "react";
import type {User} from "@supabase/supabase-js";

type AddTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    users?: MemberResponse[];
    projectId?: string;
    me?: User;
    status: Task["status"];
}
const AddTaskModal = ({isOpen, onClose, users, projectId, me, status}: AddTaskModalProps) => {

    useEffect(() => {
        if(me?.id){
            form.setValue("assignee_id", me.id)
        }
    }, [me?.id]);
    const form = useForm<TaskFormValues>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: "",
            description: "",
            assignee_id: "",
            start_date: new Date(),
            due_date: new Date(),
            priority: "medium",
            project_id: projectId,
            status: status
        },
    })

    const {mutate, isPending} = useAddTask()

    const handleSubmit = form.handleSubmit((data) => {
        console.log(data)
        mutate(data, {
            onSuccess: () => {
                form.reset()
                onClose?.()
            }
        })
    })
    return (
        <FormModal isOpen={isOpen} title={"Create Task"} onSubmit={handleSubmit} onClose={onClose} isLoading={isPending}>
            <TaskFormFields me={me} register={form.register} control={form.control} errors={form.formState.errors} status={status} users={users}/>
        </FormModal>
    );
};

export default AddTaskModal;