import {useViewAllProjects} from "@/features/project/hooks/useViewProjects.ts";
import ProjectCardItem from "@/features/project/components/uis/ProjectCardItem.tsx";

const ProjectCardsSection = () => {
    const {data: projects} = useViewAllProjects()
    return (
        <div className={"flex flex-wrap gap-4"}>
            {projects?.map((project) => (
                <ProjectCardItem key={project.id} project={project}/>
            ))}

        </div>
    );
};

export default ProjectCardsSection;