import {BaseModal} from "@/shared/components/modal";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import {useViewProjectUsers} from "@/features/member/hooks/useViewProjectUsers.ts";
import SearchSelect from "@/shared/components/inputs/search-select/SearchSelect.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import {useDebounce} from "@/shared/hooks/useDebounce.ts";
import {getInviteStatusLabel} from "@/features/member/utils/member.util.ts";
import Button from "@/shared/components/button/Button.tsx";
import {useInviteMember} from "@/features/member/hooks/useInviteMember.ts";
import MemberList from "@/features/member/components/uis/member-list/MemberList.tsx";
import UserEmpty from "@/features/member/components/uis/states/UserEmpty.tsx";

type InviteMemberModalProps = {
    projectId: string;
}
const InviteMemberModal = ({projectId}: InviteMemberModalProps) => {
    const {
        keyword,
        selectedUsers,
        setKeyword,
        addSelectedUsers,
        removeSelectUsers,
        openInviteMember,
        onCloseInviteMemberModal
    } = useMemberStore()
    const debouncedKeyword = useDebounce(keyword, 500);
    const {data: users} = useViewProjectUsers({project_id: projectId, search: debouncedKeyword})
    const {mutate, isPending} = useInviteMember()

    const handleInviteMembers = () => {
        mutate({
            project_id: projectId,
            user_ids: selectedUsers.map(user => user.user_id)
        },
            {
                onSuccess: () => {
                    onCloseInviteMemberModal()
                }
            })
    }
    return (
        <BaseModal isOpen={openInviteMember} onClose={onCloseInviteMemberModal}>
            <BaseModal.Content>
                <BaseModal.Header title={"Invite Members To The Project"} onClose={onCloseInviteMemberModal}/>
                <BaseModal.Body className={"max-h-80"}>
                    <SearchSelect selected={selectedUsers} keyword={keyword} onSelected={addSelectedUsers}
                                  onSearch={setKeyword} items={users ?? []} isDisabled={user =>
                    user.invite_status === "pending" || user.invite_status === "accepted"} renderItem={(user, isDisabled) => (
                        <div className={"flex items-center gap-3"}>
                            <Avatar avatarUrl={user.avatar_url} size={"sm"}/>
                            <div>
                                <p className={"text-text-primary"}>{user.first_name} {user.last_name}</p>
                                <p className={`text-sm ${isDisabled ? "text-text-secondary" : "text-text-muted group-hover:text-text-primary"}`}>{user.email}</p>
                                <p className={`text-sm font-medium ${user.invite_status === "accepted" ? "text-success" : user.invite_status === "pending" ? "text-warning" : "text-text-muted group-hover:text-text-primary"}`}>{getInviteStatusLabel(user.invite_status)}</p>
                            </div>
                        </div>
                    )} getKey={user => user.user_id}/>

                    <div className={"min-h-48 mt-4"}>
                        {selectedUsers.length > 0 ? (
                            <div className={"h-48 overflow-y-auto"}>
                            <MemberList users={selectedUsers} renderAction={user => (
                                <Button variant={"secondary"} fullWidth={false} size={"md"} onClick={() => removeSelectUsers(user.user_id)}>Remove</Button>
                            )}/>
                            </div>
                        ) : (
                            <div className={"h-48"}>
                                <UserEmpty/>

                            </div>
                        )}
                    </div>

                </BaseModal.Body>
                <BaseModal.Footer>
                    <Button variant={"secondary"} fullWidth={false} onClick={onCloseInviteMemberModal}>Cancel</Button>
                    <Button type={"button"} fullWidth={false} onClick={handleInviteMembers}
                            disabled={selectedUsers.length === 0 || isPending}>{isPending ? "Inviting..." : "Invite"}</Button>
                </BaseModal.Footer>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default InviteMemberModal;