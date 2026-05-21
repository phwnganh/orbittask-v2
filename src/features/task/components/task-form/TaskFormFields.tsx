import {type Control, type FieldErrors, type UseFormRegister} from "react-hook-form";
import type {TaskFormValues} from "@/features/task/schemas/task.schema.ts";
import type {Task} from "@/features/task/types/task.type.ts";
import type {MemberResponse} from "@/features/member/types/member.type.ts";
import TaskDueDateField from "@/features/task/components/task-form/TaskDueDateField.tsx";
import TaskAssigneeField from "@/features/task/components/task-form/TaskAssigneeField.tsx";
import TaskPriorityField from "@/features/task/components/task-form/TaskPriorityField.tsx";
import TaskDescriptionField from "@/features/task/components/task-form/TaskDescriptionField.tsx";
import TaskStartDateField from "@/features/task/components/task-form/TaskStartDateField.tsx";
import TaskTitleField from "@/features/task/components/task-form/TaskTitleField.tsx";
import TaskStatusField from "@/features/task/components/task-form/TaskStatusField.tsx";

type TaskFormProps = {
    register: UseFormRegister<TaskFormValues>;
    control: Control<TaskFormValues>;
    errors: FieldErrors<TaskFormValues>;
    status: Task["status"];
    users?: MemberResponse[]
}
const TaskFormFields = ({register, control, errors, status, users}: TaskFormProps) => {
    return (
        <div className={"flex flex-col gap-5"}>
            <TaskTitleField register={register} errors={errors}/>
            <TaskDescriptionField register={register}/>
            <TaskAssigneeField control={control} errors={errors} users={users} />
            <TaskPriorityField control={control}/>
            <TaskStartDateField/>
            <TaskDueDateField control={control} errors={errors}/>
            <TaskStatusField status={status}/>
        </div>
    );
};

export default TaskFormFields;