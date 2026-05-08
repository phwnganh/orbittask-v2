import {BaseModal} from "@/shared/components/modal";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import {useViewProjectUsers} from "@/features/member/hooks/useViewProjectUsers.ts";
import SearchSelect from "@/shared/components/inputs/search-select/SearchSelect.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import {useDebounce} from "@/shared/hooks/useDebounce.ts";
import {getInviteStatusLabel} from "@/features/member/utils/member.util.ts";
import Button from "@/shared/components/button/Button.tsx";

type InviteMemberModalProps = {
    projectId: string;
}
const InviteMemberModal = ({projectId}: InviteMemberModalProps) => {
    const {keyword, selectedUsers, setKeyword, addSelectedUsers, removeSelectUsers, openInviteMember, onCloseInviteMemberModal} = useMemberStore()
    const debouncedKeyword = useDebounce(keyword, 500);
    const {data: users, isLoading} = useViewProjectUsers({project_id: projectId, search: debouncedKeyword})

    return (
        <BaseModal isOpen={openInviteMember} onClose={onCloseInviteMemberModal}>
            <BaseModal.Content>
                <BaseModal.Header title={"Invite Members To The Project"} onClose={onCloseInviteMemberModal}/>
                <BaseModal.Body>
                    <SearchSelect selected={selectedUsers} keyword={keyword} onSelected={addSelectedUsers} onSearch={setKeyword} items={users ?? []} renderItem={user => (
                        <div className={"flex items-center gap-3"}>
                            <Avatar avatarUrl={user.avatar_url} size={"sm"}/>
                            <div>
                                <p>{user.first_name} {user.last_name}</p>
                                <p className={`text-sm text-text-muted group-hover:text-text-primary`}>{user.email}</p>
                                <p className={"text-sm text-text-muted group-hover:text-text-primary"}>{getInviteStatusLabel(user.invite_status)}</p>
                            </div>
                        </div>
                    )} getKey={user => user.user_id}/>

                    {selectedUsers.length > 0 && (
                        <div className={"mt-4 flex flex-col gap-2"}>
                            {selectedUsers.map(user => (
                                <div key={user.user_id} className={"flex items-center justify-between"}>
                                    <div  className={"flex items-center gap-2 px-3 py-2 rounded-full"}>
                                        <Avatar avatarUrl={user.avatar_url} size={"xs"}/>
                                        <span className={"text-sm"}>{user.first_name} {user.last_name}</span>
                                    </div>
                                    <Button variant={"secondary"} fullWidth={false} size={"md"} onClick={() => removeSelectUsers(user.user_id)}>Remove</Button>
                                </div>

                            ))}
                        </div>
                    )}
                </BaseModal.Body>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default InviteMemberModal;