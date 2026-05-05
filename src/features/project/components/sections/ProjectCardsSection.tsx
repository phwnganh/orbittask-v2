import ProjectCardItem from "@/features/project/components/uis/ProjectCardItem.tsx";
import EditProjectModal from "@/features/project/components/edit-project/EditProjectModal.tsx";
import DeleteProjectModal from "@/features/project/components/delete-project/DeleteProjectModal.tsx";
import {useProjectStore} from "@/features/project/stores/project.store.ts";
import type {ProjectResponse} from "@/features/project/types/project.type.ts";
import ProjectEmpty from "@/features/project/components/uis/ProjectEmpty.tsx";
import ProjectCardSkeleton from "@/features/project/components/uis/ProjectCardSkeleton.tsx";

const ProjectCardsSection = ({projects, isLoading}: {projects?: ProjectResponse, isLoading?: boolean}) => {
    const {isEditModalOpen, isDeleteModalOpen, onCloseEditProjectModal, onCloseDeleteProjectModal} = useProjectStore()

    if(isLoading){
        return (
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
                {Array.from({length: 6}).map((_, index) =>
                <ProjectCardSkeleton key={index}/>)}
            </div>
        )
    }
    return (
        <>
            {projects?.data && projects?.data.length > 0 ?
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start"}>
                    {projects?.data.map((project) => (
                        <ProjectCardItem key={project.id}  project={project}/>
                    ))}

                </div> : <div className={"h-full flex items-center justify-center"}><ProjectEmpty/></div>}

            <EditProjectModal isOpen={isEditModalOpen} onClose={onCloseEditProjectModal}/>
            <DeleteProjectModal isOpen={isDeleteModalOpen} onClose={onCloseDeleteProjectModal}/>
        </>

    );
};

export default ProjectCardsSection;