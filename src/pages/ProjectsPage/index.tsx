import ProjectTitleSection from "@/features/project/components/sections/ProjectTitleSection.tsx";
import ProjectsFilterSection from "@/features/project/components/sections/ProjectsFilterSection.tsx";
import ProjectPaginationSection from "@/features/project/components/sections/ProjectPaginationSection.tsx";
import ProjectCardsSection from "@/features/project/components/sections/ProjectCardsSection.tsx";

const ProjectsPage = () => {
    return (
        <div className={"flex flex-col gap-6"}>
            <ProjectTitleSection/>
            <ProjectsFilterSection/>
            <ProjectCardsSection/>
            <ProjectPaginationSection/>
        </div>
    );
};

export default ProjectsPage;