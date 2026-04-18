import Button from "@/shared/components/Button.tsx";
import {useProjectStore} from "@/features/project/stores/project.store.ts";
import AddProjectModal from "@/features/project/components/add-project/AddProjectModal.tsx";

const ProjectTitleSection = () => {
    const {isAddModalOpen, onOpenAddProjectModal, onCloseAddProjectModal} = useProjectStore()
    return (
        <div className={"flex items-center justify-between"}>
            <h1 className={"font-bold text-2xl text-text-primary"}>Projects</h1>
            <Button fullWidth={false} onClick={() =>
            {
                console.log("clicked")
                onOpenAddProjectModal()
            }}>Create Project</Button>
            <AddProjectModal isOpen={isAddModalOpen} onClose={onCloseAddProjectModal}/>
        </div>
    );
};

export default ProjectTitleSection;