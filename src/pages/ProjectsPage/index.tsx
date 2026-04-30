import ProjectTitleSection from "@/features/project/components/sections/ProjectTitleSection.tsx";
import ProjectsFilterSection from "@/features/project/components/sections/ProjectsFilterSection.tsx";
import ProjectPaginationSection from "@/features/project/components/sections/ProjectPaginationSection.tsx";
import ProjectCardsSection from "@/features/project/components/sections/ProjectCardsSection.tsx";
import {useViewAllProjects} from "@/features/project/hooks/useViewProjects.ts";

const ProjectsPage = () => {
    const {data: projects} = useViewAllProjects()
    return (
        <div className={"flex flex-col gap-6"}>
            <ProjectTitleSection/>
            <ProjectsFilterSection/>
            <ProjectCardsSection projects={projects}/>
            <ProjectPaginationSection projects={projects}/>
        </div>
    );
};

export default ProjectsPage;