import {useQuery} from "@tanstack/react-query";
import type {InviteStatus, MemberResponse} from "@/features/member/types/member.type.ts";
import {memberKeys} from "@/features/member/constants/member-query-key.constant.ts";
import {getProjectMembersApi, getProjectUsersApi} from "@/features/member/services/member.api.ts";

export const useViewProjectUsers = ({project_id, search}: {project_id: string, search?: string}) => {
    return useQuery<MemberResponse[]>({
        queryKey: memberKeys.list({project_id, search}),
        queryFn: () => getProjectUsersApi({project_id, search})
    })
}

export const useViewProjectMembers = (project_id: string, invite_status: InviteStatus)=> {
    return useQuery<MemberResponse[]>({
        queryKey: memberKeys.list({project_id, invite_status}),
        queryFn: () => getProjectMembersApi(project_id, invite_status)
    })
}