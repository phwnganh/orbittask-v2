import {type Control, type FieldErrors, type FieldValues, type UseFormRegister} from "react-hook-form";
import type {Task} from "@/features/task/types/task.type.ts";
import type {Member} from "@/features/member/types/member.type.ts";
import TaskDueDateField from "@/features/task/components/task-form/task-fields-section/TaskDueDateField.tsx";
import TaskAssigneeField from "@/features/task/components/task-form/task-fields-section/TaskAssigneeField.tsx";
import TaskPriorityField from "@/features/task/components/task-form/task-fields-section/TaskPriorityField.tsx";
import TaskDescriptionField from "@/features/task/components/task-form/task-fields-section/TaskDescriptionField.tsx";
import TaskStartDateField from "@/features/task/components/task-form/task-fields-section/TaskStartDateField.tsx";
import TaskTitleField from "@/features/task/components/task-form/task-fields-section/TaskTitleField.tsx";
import type {Profile} from "@/features/auth/types/auth.type.ts";

type TaskFormProps<T extends FieldValues> = {
    register: UseFormRegister<T>;
    control: Control<T>;
    errors: FieldErrors<T>;
    status: Task["status"];
    users?: Member[];
    me?: Profile | null;
    canEditTaskFields?: boolean;
    startDate?: string;
}
const TaskFormFields = <T extends FieldValues>({register, control, errors, users, me, canEditTaskFields = true, startDate}: TaskFormProps<T>) => {
    return (
        <div className={"flex flex-col gap-5"}>
            <TaskTitleField register={register} errors={errors}/>
            <TaskDescriptionField register={register}/>
            {canEditTaskFields && <TaskAssigneeField me={me} control={control} errors={errors} users={users} />}
            <TaskPriorityField control={control}/>
            {canEditTaskFields && <TaskStartDateField startDate={startDate}/>}
            {canEditTaskFields && <TaskDueDateField control={control} errors={errors}/>}
            {/*<TaskStatusField status={status}/>*/}
        </div>
    );
};

export default TaskFormFields;