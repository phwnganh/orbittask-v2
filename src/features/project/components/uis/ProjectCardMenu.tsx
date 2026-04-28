import {PROJECT_CARD_ITEM_MENU} from "@/features/project/constants/project-card-item-menu.constant.ts";
import DropdownItem from "@/shared/components/dropdown/DropdownItem.tsx";
import type {Project} from "@/features/project/types/project.type.ts";
import {useProjectStore} from "@/features/project/stores/project.store.ts";
import type {ProjectCardItemMenu} from "@/features/project/types/project-card-item-menu.type.ts";

type ProjectCardMenuProps = {
    project: Project;
    close: () => void;
}
const ProjectCardMenu = ({project, close}: ProjectCardMenuProps) => {
    const {onOpenEditProjectModal} = useProjectStore()

    const handleSelectMenuItem = (value: ProjectCardItemMenu) => {
        switch (value){
            case "edit":
                onOpenEditProjectModal(project);
                break;
            case "delete":
                break;
        }
        close();
    }
    return (
        <>
            {PROJECT_CARD_ITEM_MENU.map((item) => (
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