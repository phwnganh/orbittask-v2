import {BaseModal} from "@/shared/components/modal";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import {useViewProjectUsers} from "@/features/member/hooks/useViewProjectUsers.ts";
import SearchSelect from "@/shared/components/inputs/search-select/SearchSelect.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";

type InviteMemberModalProps = {
    projectId: string;
}
const InviteMemberModal = ({projectId}: InviteMemberModalProps) => {
    const {keyword, selectedUser, setKeyword, setSelectedUser, openInviteMember, onCloseInviteMemberModal} = useMemberStore()
    const {data: users, isLoading} = useViewProjectUsers({project_id: projectId})

    return (
        <BaseModal isOpen={openInviteMember} onClose={onCloseInviteMemberModal}>
            <BaseModal.Content>
                <BaseModal.Header title={"Invite Members To The Project"} onClose={onCloseInviteMemberModal}/>
                <BaseModal.Body>
                    <SearchSelect selected={selectedUser} keyword={keyword} onSelected={setSelectedUser} onSearch={setKeyword} items={users ?? []} renderItem={user => (
                        <div className={"flex items-center gap-3"}>
                            <Avatar avatarUrl={user?.avatar_url} size={"sm"}/>
                            <div>
                                <p>{user?.first_name} {user?.last_name}</p>
                                <p className={"text-sm text-text-muted"}>{user?.email}</p>
                            </div>
                        </div>
                    )} getKey={user => user.user_id}/>
                </BaseModal.Body>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default InviteMemberModal;