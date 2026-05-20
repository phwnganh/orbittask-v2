import {useForm} from "react-hook-form";
import {
    type TaskFormValues,
    taskSchema
} from "@/features/task/components/task-form/task.schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import FormModal from "@/shared/components/modal/FormModal.tsx";
import TaskFormFields from "@/features/task/components/task-form/TaskFormFields.tsx";
import {addDays} from "date-fns";
import type {Task} from "@/features/task/types/task.type.ts";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type AddTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    status: Task["status"];
    users?: MemberResponse[]
}
const AddTaskModal = ({isOpen, onClose, status, users}: AddTaskModalProps) => {
    const form = useForm<TaskFormValues>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: "",
            description: "",
            assignee_id: "",
            start_date: new Date(),
            due_date: addDays(new Date(), 1),
            priority: "medium"
        }
    })

    const handleSubmit = form.handleSubmit((data) => {

    })
    return (
        <FormModal isOpen={isOpen} title={"Create Task"} onSubmit={handleSubmit} onClose={onClose}>
            <TaskFormFields register={form.register} control={form.control} errors={form.formState.errors} status={status} users={users}/>
        </FormModal>
    );
};

export default AddTaskModal;