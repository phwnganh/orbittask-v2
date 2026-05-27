import ProjectTitleSection from "@/features/project/components/sections/ProjectTitleSection.tsx";
import ProjectsFilterSection from "@/features/project/components/sections/ProjectsFilterSection.tsx";
import ProjectPaginationSection from "@/features/project/components/sections/ProjectPaginationSection.tsx";
import ProjectCardsSection from "@/features/project/components/sections/ProjectCardsSection.tsx";
import {useViewAllProjects} from "@/features/project/hooks/useViewProjects.ts";

const ProjectsPage = () => {
    const {data: projects, isLoading} = useViewAllProjects()
    return (
        <div className={"flex flex-col gap-6 h-full"}>
            <ProjectTitleSection/>
            <ProjectsFilterSection/>
            <div className={"flex-1 min-h-0 overflow-y-auto p-2 scrollbar-custom"}>
                <ProjectCardsSection projects={projects} isLoading={isLoading}/>
            </div>
            <ProjectPaginationSection projects={projects}/>
        </div>
    );
};

export default ProjectsPage;