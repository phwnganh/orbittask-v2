import Card from "@/shared/components/Card.tsx";
import Badge from "@/shared/components/Badge.tsx";
import type {Project} from "@/features/project/types/project.type.ts";

type ProjectCardItemProps = {
    project: Project
}
const ProjectCardItem = ({project}: ProjectCardItemProps) => {
    return (
        <Card className={"flex flex-col gap-4"}>
            <div className={"flex items-center justify-between"}>
                <p>{project.title}</p>
                <Badge/>
            </div>
            <span className={"-mt-1"}>{project.description}</span>
            {/*<Progress value={}/>*/}
        </Card>
    );
};

export default ProjectCardItem;