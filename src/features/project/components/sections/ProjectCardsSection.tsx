import {useViewAllProjects} from "@/features/project/hooks/useViewProjects.ts";
import ProjectCardItem from "@/features/project/components/uis/ProjectCardItem.tsx";

const ProjectCardsSection = () => {
    const {data: projects} = useViewAllProjects()
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}>
            {projects?.map((project) => (
                <ProjectCardItem key={project.id} project={project}/>
            ))}

        </div>
    );
};

export default ProjectCardsSection;