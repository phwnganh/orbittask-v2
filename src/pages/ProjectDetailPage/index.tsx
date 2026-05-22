import {useParams} from "react-router-dom";
import InviteMemberModal from "@/features/member/components/modals/invite-member/InviteMemberModal.tsx";
import {useViewProjectMembers, useViewProjectUsers} from "@/features/member/hooks/useViewProjectUsers.ts";
import ManageMemberModal from "@/features/member/components/modals/manage-members/ManageMemberModal.tsx";
import ProjectHeader from "@/features/project/components/layouts/ProjectHeader.tsx";
import ProjectContent from "@/features/project/components/layouts/ProjectContent.tsx";
import {useMemberStore} from "@/features/member/stores/member.store.ts";
import {useDebounce} from "@/shared/hooks/useDebounce.ts";
import {useSession} from "@/features/auth/hooks/useSession.ts";
import {useMemberFilterStore} from "@/features/member/stores/member-filter.store.ts";

const ProjectDetailPage = () => {
    const {id} = useParams()
    if(!id) return null;
    const {keyword} = useMemberStore()
    const {search} = useMemberFilterStore()
    const {data: members} = useViewProjectMembers({project_id: id, invite_status: "accepted", search: search})
    const {data: pendingUsers} = useViewProjectMembers({project_id: id, invite_status: "pending", search: search})
    const debouncedKeyword = useDebounce(keyword, 500);
    const {data: users} = useViewProjectUsers({project_id: id, search: debouncedKeyword})

    const {data: session} = useSession()
    const me = session?.user;
    return (
        <div className={"flex flex-col gap-4 h-full overflow-hidden"}>
            <ProjectHeader projectId={id} members={members}/>
            <ProjectContent me={me} users={members} projectId={id}/>
            <InviteMemberModal me={me} projectId={id} users={users}/>
            <ManageMemberModal me={me} projectId={id} members={members} pendingUsers={pendingUsers}/>
        </div>
    );
};

export default ProjectDetailPage;