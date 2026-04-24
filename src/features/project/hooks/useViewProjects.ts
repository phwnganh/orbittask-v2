import {useQuery} from "@tanstack/react-query";
import type {Project} from "@/features/project/types/project.type.ts";
import {getAllProjectsApi} from "@/features/project/services/project.api.ts";
import {projectKeys} from "@/features/project/constants/project-query-key.constant.ts";

export const useViewAllProjects = () => {
    return useQuery<Project[]>({
        queryKey: projectKeys.all,
        queryFn: getAllProjectsApi
    })
}