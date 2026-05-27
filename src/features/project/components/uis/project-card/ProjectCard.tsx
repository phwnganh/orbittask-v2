import Card from "@/shared/components/data-display/Card.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import type {Project, ProjectHealth} from "@/features/project/types/project.type.ts";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import ProjectCardMenu from "./ProjectCardMenu.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import {useNavigate} from "react-router-dom";
import {PROJECT_DETAILS} from "@/shared/constants/route.constant.ts";
import Progress from "@/shared/components/Progress.tsx";
import AvatarGroup from "@/shared/components/avatar/AvatarGroup.tsx";
import {PROJECT_STATUS} from "@/features/project/utils/project-status.util.ts";

type ProjectCardProps = {
    project: Project
}
const ProjectCard = ({project}: ProjectCardProps) => {
    const navigate = useNavigate()
    const handleClickProjectDetail = () => {
        navigate(`${PROJECT_DETAILS}/${project.id}`)
    }

    const totalTasks = project.total_tasks_count ?? 0;
    const completedTasks = project.completed_tasks_count ?? 0;
    const progress = (totalTasks > 0) ? ((completedTasks / totalTasks) * 100) : 0;
    const overdueTasks = project.overdue_tasks_count ?? 0;
    const myTasks = project.my_tasks_count ?? 0;
    const projectHealth = (project.project_health ?? "on_track") as ProjectHealth;
    const projectStatus = PROJECT_STATUS[projectHealth]
    return (
        <Card key={project.id} onClick={handleClickProjectDetail} className={"flex flex-col gap-4 h-full cursor-pointer hover:shadow-sm hover:-translate-y-0.5"}>
            <div className={"flex items-start justify-between gap-3"}>
                <div className={"flex flex-col gap-2 min-w-0"}>
                    <div className={"flex items-center gap-2 flex-wrap"}>
                        <h3 className={"font-semibold text-text-primary truncate"}>{project.title}</h3>
                        <Badge size={"sm"} variant={projectStatus.badgeVariant}>{projectStatus.label}</Badge>
                    </div>

                    {project.description &&
                        <p
                            className="text-sm text-text-muted line-clamp-2"
                        >
                            {project.description}
                        </p>
                    }
                </div>

                <div className={"shrink-0"} onClick={e => e.stopPropagation()}>
                    <Dropdown>
                        <DropdownTrigger>
                            {(props) => <MenuDotsButton {...props}/>}

                        </DropdownTrigger>

                        <DropdownContent>
                            <ProjectCardMenu project={project}/>
                        </DropdownContent>
                    </Dropdown>
                </div>
            </div>

            <div className={"flex flex-col gap-2"}>
                <div className={"flex items-center justify-between"}>
                    <span className={"text-sm text-text-muted"}>
                        Progress
                    </span>

                    <span className={"text-sm font-medium"}>
                        {progress}%
                    </span>
                </div>
                <Progress value={progress} variant={projectStatus.progressVariant}/>
            </div>

            <div className={"flex items-center justify-between text-sm"}>
                <span className={"text-text-muted"}>{completedTasks} / {totalTasks} completed</span>

                {overdueTasks > 0 && (
                    <span className={"text-error font-medium"}>{overdueTasks} overdue</span>
                )}

            </div>
            <div className={"flex items-center justify-between pt-1"}>
                <AvatarGroup size={"xs"} users={project.members ?? []} max={3}/>
                <span className={"text-sm text-text-muted"}>My tasks: <span className={"font-medium text-text-primary"}>{myTasks}</span>
                </span>
            </div>
        </Card>
    );
};

export default ProjectCard;