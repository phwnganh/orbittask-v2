import Button from "@/shared/components/button/Button.tsx";
import AvatarGroup from "@/shared/components/avatar/AvatarGroup.tsx";
import {useParams} from "react-router-dom";
import {useViewProjectDetail} from "@/features/project/hooks/useViewProjects.ts";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import InviteMemberModal from "@/features/member/components/modals/invite-member/InviteMemberModal.tsx";
import {useViewProjectMembers} from "@/features/member/hooks/useViewProjectUsers.ts";
import ManageMemberModal from "@/features/member/components/modals/manage-members/ManageMemberModal.tsx";

const ProjectDetailPage = () => {
    const {id} = useParams()
    if(!id) return null;
    const {data: project} = useViewProjectDetail(id)
    const {data: members} = useViewProjectMembers(id, "accepted")
    const {data: pendingUsers} = useViewProjectMembers(id, "pending")
    const {onOpenInviteMemberModal, onOpenManageMemberModal} = useMemberStore()
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex justify-between items-center"}>
                <Button variant={"secondary"} fullWidth={false} size={"md"}>Back to Projects</Button>
                <div className={"flex items-center gap-3"}>
                    <button type={"button"} onClick={onOpenManageMemberModal} className={"hover:opacity-80 transition cursor-pointer"}>
                        <AvatarGroup users={members ?? []} max={3}/>
                    </button>
                    <Button variant={"primary"} fullWidth={false} size={"md"} onClick={onOpenInviteMemberModal}>Invite</Button>
                </div>
            </div>

            <div className={"flex flex-col gap-1"}>
                <h1 className={"text-2xl font-bold"}>{project?.title}</h1>
            </div>
            <p className={"text-text-secondary"}>{project?.description}</p>
            <InviteMemberModal projectId={id}/>
            <ManageMemberModal projectId={id} members={members} pendingUsers={pendingUsers}/>
        </div>
    );
};

export default ProjectDetailPage;