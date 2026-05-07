import {useQuery} from "@tanstack/react-query";
import {getAllProjectsApi, getProjectDetailApi} from "@/features/project/services/project.api.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {Project, ProjectResponse} from "@/features/project/types/project.type.ts";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";

export const useViewAllProjects = () => {
    const {search, page, pageSize} = useProjectFilterStore()

    return useQuery<ProjectResponse>({
        queryKey: projectKeys.list({search, page, pageSize}),
        queryFn: () => getAllProjectsApi({search, page, pageSize}),
    })
}

export const useViewProjectDetail = (projectId: string) => {
    const {getOne} = useReactQueryClient()
    return useQuery<Project>({
        queryKey: projectKeys.detail(projectId),
        queryFn: () => getProjectDetailApi(projectId),
        initialData: () => getOne(projectKeys.lists(), projectId),
        enabled: !!projectId
    })
}