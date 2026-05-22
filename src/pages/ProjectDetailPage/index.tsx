import {useParams} from "react-router-dom";
import InviteMemberModal from "@/features/member/components/modals/invite-member/InviteMemberModal.tsx";
import {useViewProjectMembers, useViewProjectUsers} from "@/features/member/hooks/useViewProjectUsers.ts";
import ManageMemberModal from "@/features/member/components/modals/manage-members/ManageMemberModal.tsx";
import ProjectHeader from "@/features/project/components/layouts/ProjectHeader.tsx";
import ProjectContent from "@/features/project/components/layouts/ProjectContent.tsx";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import {useDebounce} from "@/shared/hooks/useDebounce.ts";

const ProjectDetailPage = () => {
    const {id} = useParams()
    if(!id) return null;
    const {keyword} = useMemberStore()
    const {data: members} = useViewProjectMembers({project_id: id, invite_status: "accepted"})
    const {data: pendingUsers} = useViewProjectMembers({project_id: id, invite_status: "pending"})
    const debouncedKeyword = useDebounce(keyword, 500);
    const {data: users} = useViewProjectUsers({project_id: id, search: debouncedKeyword})

    return (
        <div className={"flex flex-col gap-4 h-full overflow-hidden"}>
            <ProjectHeader projectId={id} members={members}/>
            <ProjectContent users={users} projectId={id}/>
            <InviteMemberModal projectId={id} users={users}/>
            <ManageMemberModal projectId={id} members={members} pendingUsers={pendingUsers}/>
        </div>
    );
};

export default ProjectDetailPage;