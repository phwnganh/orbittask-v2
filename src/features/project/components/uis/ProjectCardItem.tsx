import Card from "@/shared/components/Card.tsx";
import Badge from "@/shared/components/Badge.tsx";
import type {Project} from "@/features/project/types/project.type.ts";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "../../../../shared/components/button/MenuDotsButton.tsx";
import ProjectCardMenu from "./ProjectCardMenu.tsx";
import EditProjectModal from "@/features/project/components/edit-project/EditProjectModal.tsx";
import {useProjectStore} from "@/features/project/stores/project.store.ts";

type ProjectCardItemProps = {
    project: Project
}
const ProjectCardItem = ({project}: ProjectCardItemProps) => {
    const {isEditModalOpen, onCloseEditProjectModal} = useProjectStore()
    return (
        <Card className={"flex flex-col gap-4"}>
            <div className={"flex items-center justify-between"}>
                <p>{project.title}</p>
                <Dropdown trigger={({open, ref, ...props}) => <DropdownTrigger ref={ref} open={open} {...props}/>}>
                    {({close}) => <ProjectCardMenu project={project} close={close}/>}
                </Dropdown>
            </div>
            <span className={"-mt-1"}>{project.description}</span>
            {/*<Progress value={}/>*/}
            <EditProjectModal isOpen={isEditModalOpen} onClose={onCloseEditProjectModal}/>

        </Card>
    );
};

export default ProjectCardItem;