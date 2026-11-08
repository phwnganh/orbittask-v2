import type {Project} from "@/features/project/types/project.type.ts";
import {create} from "zustand";

type ProjectState = {
    isAddModalOpen: boolean;
    isEditModalOpen: boolean;
    isDeleteModalOpen: boolean;
    selectedProject: Project | null;
    onOpenAddProjectModal: () => void;
    onCloseAddProjectModal: () => void;

    onOpenEditProjectModal: (project: Project) => void;
    onCloseEditProjectModal: () => void;

    onOpenDeleteProjectModal: (project: Project) => void;
    onCloseDeleteProjectModal: () => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
    isAddModalOpen: false,
    isEditModalOpen: false,
    isDeleteModalOpen: false,
    selectedProject: null,
    onOpenAddProjectModal: () => set({isAddModalOpen: true}),
    onCloseAddProjectModal: () => set({isAddModalOpen: false}),
    onOpenEditProjectModal: (project: Project) => set({isEditModalOpen: true, selectedProject: project}),
    onCloseEditProjectModal: () => set({isEditModalOpen: false, selectedProject: null}),
    onOpenDeleteProjectModal: (project: Project) => set({isDeleteModalOpen: true, selectedProject: project}),
    onCloseDeleteProjectModal: () => set({isDeleteModalOpen: false, selectedProject: null}),
}))