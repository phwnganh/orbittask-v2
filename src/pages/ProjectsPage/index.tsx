import ProjectTitleSection from "@/features/project/components/ProjectTitleSection.tsx";
import ProjectsFilterActionSection from "@/features/project/components/ProjectsFilterActionSection.tsx";
import ProjectPaginationSection from "@/features/project/components/ProjectPaginationSection.tsx";

const ProjectsPage = () => {
    return (
        <div className={"flex flex-col gap-6"}>
            <ProjectTitleSection/>
            <ProjectsFilterActionSection/>
            <ProjectPaginationSection/>
        </div>
    );
};

export default ProjectsPage;