import {type Control, Controller, type FieldErrors, type FieldValues, type Path} from "react-hook-form";
import SearchSelect from "@/shared/components/inputs/base-select/search-select/SearchSelect.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import type {Member} from "@/features/member/types/member.type.ts";
import type {User} from "@supabase/supabase-js";

type TaskAssigneeFieldProps<T extends FieldValues> = {
    control: Control<T>;
    errors: FieldErrors<T>;
    users?: Member[];
    me?: User;
}
const TaskAssigneeField = <T extends FieldValues>({control, errors, users, me}: TaskAssigneeFieldProps<T>) => {
    const {keyword, setKeyword} = useMemberStore()
    return (
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
                                <p className={"text-text-primary"}>{(me?.id === user?.user_id) ? "Me" : `${user.first_name} ${user.last_name}`}</p>
                                <p className={"text-sm text-text-muted"}>{user.email}</p>
                            </div>
                        </div>
                    )} getKey={user => user.user_id}
                                  selectedContent={selectedUser && (
                                      <div className={"flex items-center gap-3"}>
                                          <Avatar avatarUrl={selectedUser.avatar_url} size={"sm"}/>
                                          <span className={"text-text-primary"}>
                                    {(me?.id === selectedUser?.user_id) ? "Me" : `${selectedUser.first_name} ${selectedUser.last_name}`}
                                </span>
                                      </div>
                                  )} onClearSelected={() => {
                        field.onChange("")
                    }} hideSelectedItem={false} isDisabled={user => user.user_id === field.value}/>
                )
            }} name={"assignee_id" as Path<T>}/>
        </div>
    );
};

export default TaskAssigneeField;