import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getAllProjectsApi, getPinnedProjectsApi, getProjectDetailApi} from "@/features/project/services/project.api.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {Project, ProjectResponse} from "@/features/project/types/project.type.ts";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";
import {useReactQueryClient} from "@/shared/libs/react-query/query-client.ts";
import {projectPinKeys} from "@/features/project/constants/project-pin-query-key.constant.ts";
import type {ProjectPin} from "@/features/project/types/project-pins.type.ts";

export const useViewAllProjects = () => {
    const {search, page, pageSize, ownership, relevance, status, sort} = useProjectFilterStore()

    return useQuery<ProjectResponse>({
        queryKey: projectKeys.list({search, page, pageSize, ownership, relevance, status, sort}),
        queryFn: () => getAllProjectsApi({search, page, pageSize, ownership, relevance, status, sort}),
        placeholderData: keepPreviousData
    })
}

export const useViewPinnedProjects = () => {
    return useQuery<ProjectPin[]>({
        queryKey: projectPinKeys.lists(),
        queryFn: getPinnedProjectsApi
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