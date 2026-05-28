import {
    getProjectCardItemMenu,
} from "@/features/project/constants/project-card-item-menu.constant.ts";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import type {Project} from "@/features/project/types/project.type.ts";
import {useProjectStore} from "@/features/project/stores/project.store.ts";
import type {ProjectCardItemMenu} from "@/features/project/types/project-card-item-menu.type.ts";
import {usePinProject} from "@/features/project/hooks/usePinProject.ts";
import {useUnpinProject} from "@/features/project/hooks/useUnpinProject.ts";

type ProjectCardMenuProps = {
    project: Project;
}
const ProjectCardMenu = ({project}: ProjectCardMenuProps) => {
    const {onOpenEditProjectModal, onOpenDeleteProjectModal} = useProjectStore()
    const {mutate: pinned} = usePinProject()
    const {mutate: unpinned} = useUnpinProject()

    const handleSelectMenuItem = (value: ProjectCardItemMenu) => {
        switch (value){
            case "edit":
                onOpenEditProjectModal(project);
                break;
            case "pin":
                pinned({
                    project: project
                })
                break;
            case "unpin":
                unpinned({
                    project_id: project.id
                })
                break;
            case "delete":
                onOpenDeleteProjectModal(project);
                break;
        }
    }
    return (
        <>
            {getProjectCardItemMenu(project.is_pinned).map((item) => (
                <DropdownItem key={item.value} onClick={() => {
                    handleSelectMenuItem(item.value)
                }}>
                    <span className={"flex items-center w-full"}>
                        {item.label}
                    </span>
                </DropdownItem>
            ))}
        </>
    );
};

export default ProjectCardMenu;