import Card from "@/shared/components/Card.tsx";
import Badge from "@/shared/components/Badge.tsx";
import type {Project} from "@/features/project/types/project.type.ts";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import ProjectCardMenu from "./ProjectCardMenu.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import {useNavigate} from "react-router-dom";
import {PROJECT_DETAILS} from "@/shared/constants/route.constant.ts";

type ProjectCardItemProps = {
    project: Project
}
const ProjectCardItem = ({project}: ProjectCardItemProps) => {
    const navigate = useNavigate()
    return (
        <Card key={project.id} className={"flex flex-col justify-between h-full"}>
            <div className={"flex items-center justify-between"}>
                <p>{project.title}</p>

                <Dropdown>
                    <DropdownTrigger>
                        {(props) => <MenuDotsButton {...props}/>}

                    </DropdownTrigger>

                    <DropdownContent>
                        <ProjectCardMenu project={project}/>
                    </DropdownContent>
                </Dropdown>

            </div>
            <span className={"-mt-1"}>{project.description}</span>
            {/*<Progress value={}/>*/}

        </Card>
    );
};

export default ProjectCardItem;