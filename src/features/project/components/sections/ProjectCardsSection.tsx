import {useViewAllProjects} from "@/features/project/hooks/useViewProjects.ts";
import ProjectCardItem from "@/features/project/components/uis/ProjectCardItem.tsx";
import EditProjectModal from "@/features/project/components/edit-project/EditProjectModal.tsx";
import DeleteProjectModal from "@/features/project/components/delete-project/DeleteProjectModal.tsx";
import {useProjectStore} from "@/features/project/stores/project.store.ts";

const ProjectCardsSection = () => {
    const {data: projects} = useViewAllProjects()
    const {isEditModalOpen, isDeleteModalOpen, onCloseEditProjectModal, onCloseDeleteProjectModal} = useProjectStore()

    return (
        <>
            <div className={"grid grid-cols-1 gap-4 items-start"}>
                {projects?.map((project) => (
                    <ProjectCardItem key={project.id}  project={project}/>
                ))}

            </div>
            <EditProjectModal isOpen={isEditModalOpen} onClose={onCloseEditProjectModal}/>
            <DeleteProjectModal isOpen={isDeleteModalOpen} onClose={onCloseDeleteProjectModal}/>
        </>

    );
};

export default ProjectCardsSection;