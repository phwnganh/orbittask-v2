import {type Control, type FieldErrors, type FieldValues, type UseFormRegister} from "react-hook-form";
import type {Task} from "@/features/task/types/task.type.ts";
import type {Member} from "@/features/member/types/member.type.ts";
import TaskDueDateField from "@/features/task/components/task-form/TaskDueDateField.tsx";
import TaskAssigneeField from "@/features/task/components/task-form/TaskAssigneeField.tsx";
import TaskPriorityField from "@/features/task/components/task-form/TaskPriorityField.tsx";
import TaskDescriptionField from "@/features/task/components/task-form/TaskDescriptionField.tsx";
import TaskStartDateField from "@/features/task/components/task-form/TaskStartDateField.tsx";
import TaskTitleField from "@/features/task/components/task-form/TaskTitleField.tsx";
import TaskStatusField from "@/features/task/components/task-form/TaskStatusField.tsx";
import type {Profile} from "@/features/auth/types/auth.type.ts";

type TaskFormProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
    status: Task["status"];
    users?: Member[];
    me?: Profile | null;
}
const TaskFormFields = <T extends FieldValues>({register, control, errors, status, users, me}: TaskFormProps<T>) => {
    return (
        <div className={"flex flex-col gap-5"}>
            <TaskTitleField register={register} errors={errors}/>
            <TaskDescriptionField register={register}/>
            <TaskAssigneeField me={me} control={control} errors={errors} users={users} />
            <TaskPriorityField control={control}/>
            <TaskStartDateField/>
            <TaskDueDateField control={control} errors={errors}/>
            <TaskStatusField status={status}/>
        </div>
    );
};

export default TaskFormFields;