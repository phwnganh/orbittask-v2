import FormModal from "@/shared/components/modal/FormModal.tsx";
import type {User} from "@supabase/supabase-js";
import {useTaskStore} from "@/features/task/stores/task.store.ts";
import {useForm} from "react-hook-form";
import {type EditTaskFormValues, editTaskSchema} from "@/features/task/schemas/task.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEditTask} from "@/features/task/hooks/useEditTask.ts";
import {useEffect} from "react";
import TaskFormFields from "@/features/task/components/task-form/TaskFormFields.tsx";

type EditTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    me?: User;
}
const EditTaskModal = ({isOpen, onClose, me}: EditTaskModalProps) => {
    const {selectedTask} = useTaskStore()
    const form = useForm<EditTaskFormValues>({
        resolver: zodResolver(editTaskSchema),
        defaultValues: {
            title: "",
            description: "",
            assignee_id: "",
            due_date: new Date(),
            priority: "medium",
        }
    })

    const {reset} = form;

    useEffect(() => {
        if(isOpen && selectedTask){
            reset({
                title: selectedTask.title,
                description: selectedTask.description ?? "",
                assignee_id: selectedTask.assignee_id ?? me?.id,
                due_date: new Date(selectedTask.due_date) ?? new Date(),
                priority: selectedTask.priority ?? "medium",
            })
        }
    }, [isOpen, selectedTask, reset]);

    const {mutate, isPending} = useEditTask()

    const handleSubmit = form.handleSubmit(data => {
        if(!selectedTask) return;
        mutate({
            task_id: selectedTask.id,
            project_id: selectedTask.project_id,
            status: selectedTask.status,
            payload: data
        }, {
            onSuccess: () => {
                form.reset()
                onClose?.()
            }
        })
    })
    return (
        <FormModal isOpen={isOpen} title={"Edit Task"} onSubmit={handleSubmit} onClose={onClose} isLoading={isPending}>
            <TaskFormFields<EditTaskFormValues> register={form.register} control={form.control} errors={form.formState.errors} status={selectedTask?.status ?? "todo"}/>
        </FormModal>
    );
};

export default EditTaskModal;