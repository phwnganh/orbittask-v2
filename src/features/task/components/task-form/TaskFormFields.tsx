import {type Control, Controller, type FieldErrors, type UseFormRegister} from "react-hook-form";
import type {TaskFormValues} from "@/features/task/schemas/task.schema.ts";
import Input from "@/shared/components/inputs/Input.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import SearchSelect from "@/shared/components/inputs/base-select/search-select/SearchSelect.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import SingleSelect from "@/shared/components/inputs/base-select/single-select/SingleSelect.tsx";
import {TASK_PRIORITIES} from "@/features/task/constants/task-priority.constant.ts";

type TaskFormProps = {
    register: UseFormRegister<TaskFormValues>;
    control: Control<TaskFormValues>;
    errors: FieldErrors<TaskFormValues>;
    status: Task["status"];
    users?: MemberResponse[]
}
const TaskFormFields = ({register, control, errors, status, users}: TaskFormProps) => {
    const {keyword, setKeyword} = useMemberStore()
    return (
        <div className={"flex flex-col gap-5"}>
            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>
                    Title
                </label>
                <Input {...register("title")} placeholder="Enter task title" />
                {errors.title && (
                    <span className={"text-xs text-error"}>{errors.title.message}</span>
                )}
            </div>

            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>
                    Description
                </label>
                <textarea {...register("description")} placeholder={"Enter project description"}
                          rows={4} className={"w-full px-3 py-2 rounded-md border border-border-primary bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"}/>
            </div>

            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-text-secondary font-medium"}>Assignee</label>
                <Controller control={control} render={({field}) => {
                    const selectedUser = users?.find(user => user.user_id === field.value)
                    return (
                        <SearchSelect placeholder={"Select assignee"} selected={selectedUser ? [selectedUser]: []} keyword={keyword} onSelected={(user) => {
                            field.onChange(user.user_id);
                        }} onSearch={setKeyword} items={users ?? []} renderItem={user => (
                            <div className={"flex items-center gap-3"}>
                                <Avatar avatarUrl={user.avatar_url} size={"sm"}/>
                                <div>
                                    <p className={"text-text-primary"}>{user.first_name} {user.last_name}</p>
                                    <p className={"text-sm text-text-muted"}>{user.email}</p>
                                </div>
                            </div>
                        )} getKey={user => user.user_id}
                        selectedContent={selectedUser && (
                            <div className={"flex items-center gap-3"}>
                                <Avatar avatarUrl={selectedUser.avatar_url} size={"sm"}/>
                                <span className={"text-text-primary"}>
                                    {selectedUser.first_name} {selectedUser.last_name}
                                </span>
                            </div>
                        )} onClearSelected={() => {
                            field.onChange("")
                        }} hideSelectedItem={false} isDisabled={user => user.user_id === field.value}/>
                    )
                }} name={"assignee_id"}/>
            </div>

            <div className={"flex items-center gap-3"}>
                <div className={"flex flex-col gap-1.5"}>
                    <label className={"text-sm text-secondary font-medium"}>Start Date</label>
                </div>
                <div className={"flex flex-col gap-1.5"}>
                    <label className={"text-sm text-secondary font-medium"}>Due Date</label>
                </div>
            </div>
            <div className={"flex flex-col gap-1.5"}>
                <label className={"text-sm text-secondary font-medium"}>Priority</label>
                <Controller control={control} render={({field}) => {
                    const selectedPriority = TASK_PRIORITIES.find(priority => priority.value === field.value) ?? null;

                    return (
                        <SingleSelect value={selectedPriority} items={[...TASK_PRIORITIES]} onChange={priority => {
                            field.onChange(priority?.value ?? "")
                        }} getKey={priority => priority.value} renderItem={(priority) => (
                            <div className={"flex items-center gap-3"}>
                                <Badge size={"sm"} variant={priority.variant}>{priority.label}</Badge>
                            </div>
                        )} renderValue={(priority) => {
                            if(!priority) return null;
                            return (
                                <Badge size={"sm"} variant={priority.variant}>{priority.label}</Badge>
                            )
                        }} placeholder={"Select priority"}/>
                    )
                }} name={"priority"}/>
            </div>
            <div className={"flex items-center gap-3"}>
                <label className={"text-sm text-secondary font-medium"}>Status</label>
                <Badge variant={"info"}>{status}</Badge>
            </div>
        </div>
    );
};

export default TaskFormFields;