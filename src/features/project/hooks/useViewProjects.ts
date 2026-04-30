import {useQuery} from "@tanstack/react-query";
import {getAllProjectsApi} from "@/features/project/services/project.api.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";
import type {ProjectResponse} from "@/features/project/types/project.type.ts";
import {useProjectFilterStore} from "@/features/project/stores/project-filter.store.ts";

export const useViewAllProjects = () => {
    const {search, page, pageSize} = useProjectFilterStore()

    return useQuery<ProjectResponse>({
        queryKey: projectKeys.list({search, page, pageSize}),
        queryFn: () => getAllProjectsApi({search, page, pageSize}),
    })
}