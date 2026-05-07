import Button from "@/shared/components/button/Button.tsx";
import AvatarGroup from "@/shared/components/avatar/AvatarGroup.tsx";
import {useParams} from "react-router-dom";
import {useViewProjectDetail} from "@/features/project/hooks/useViewProjects.ts";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import InviteMemberModal from "@/features/member/components/modals/invite-member/InviteMemberModal.tsx";

const ProjectDetailPage = () => {
    const {id} = useParams()
    if(!id) return null;
    const {data: project} = useViewProjectDetail(id)
    const {onOpenInviteMemberModal} = useMemberStore()
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex justify-between items-center"}>
                <Button variant={"secondary"} fullWidth={false} size={"md"}>Back to Projects</Button>
                <div className={"flex items-center gap-3"}>
                    <Button variant={"primary"} fullWidth={false} size={"md"} onClick={onOpenInviteMemberModal}>Invite</Button>
                </div>
            </div>

            <div className={"flex flex-col gap-1"}>
                <h1 className={"text-2xl font-bold"}>{project?.title}</h1>
            </div>
            <p className={"text-text-secondary"}>{project?.description}</p>
            <InviteMemberModal projectId={id}/>
        </div>
    );
};

export default ProjectDetailPage;