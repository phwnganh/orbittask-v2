import {useParams} from "react-router-dom";
import InviteMemberModal from "@/features/member/components/modals/invite-member/InviteMemberModal.tsx";
import {useViewProjectMembers} from "@/features/member/hooks/useViewProjectUsers.ts";
import ManageMemberModal from "@/features/member/components/modals/manage-members/ManageMemberModal.tsx";
import ProjectHeader from "@/features/project/components/layouts/ProjectHeader.tsx";
import ProjectContent from "@/features/project/components/layouts/ProjectContent.tsx";

const ProjectDetailPage = () => {
    const {id} = useParams()
    if(!id) return null;
    const {data: members} = useViewProjectMembers(id, "accepted")
    const {data: pendingUsers} = useViewProjectMembers(id, "pending")
    return (
        <div className={"flex flex-col gap-4"}>
            <ProjectHeader projectId={id} members={members}/>
            <ProjectContent/>
            <InviteMemberModal projectId={id}/>
            <ManageMemberModal projectId={id} members={members} pendingUsers={pendingUsers}/>
        </div>
    );
};

export default ProjectDetailPage;