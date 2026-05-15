import {BaseModal} from "@/shared/components/modal";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import MemberTabs from "@/features/member/components/uis/member-tabs/MemberTabs.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import Button from "@/shared/components/button/Button.tsx";

type ManageMemberModalProps = {
    projectId: string;
    members?: Member[];
    pendingUsers?: Member[];
}
const ManageMemberModal = ({projectId, members, pendingUsers}: ManageMemberModalProps) => {
    const {openManageMember, onCloseManageMemberModal} = useMemberStore()
    return (
        <BaseModal isOpen={openManageMember} onClose={onCloseManageMemberModal}>
            <BaseModal.Content>
                <BaseModal.Header title={"Manage Members In Project"} onClose={onCloseManageMemberModal}/>
                <BaseModal.Body className={"max-h-80"}>
                    <MemberTabs members={members} pendingUsers={pendingUsers}/>
                </BaseModal.Body>
                <BaseModal.Footer>
                    <Button variant={"secondary"} fullWidth={false} onClick={onCloseManageMemberModal}>Cancel</Button>
                </BaseModal.Footer>
            </BaseModal.Content>
        </BaseModal>
    );
};

export default ManageMemberModal;