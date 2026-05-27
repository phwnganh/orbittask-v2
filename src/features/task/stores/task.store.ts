import {create} from "zustand";
import type {Task} from "@/features/task/types/task.type.ts";

type AddTaskModalState = {
    isOpen: boolean;
    defaultStatus: Task["status"];
}
type TaskState = {
    addTaskModal: AddTaskModalState;
    isEditTaskModalOpen: boolean;
    isDeleteTaskModalOpen: boolean;
    selectedTask: Task | null;
    onOpenAddTaskModal: (status: Task["status"]) => void;
    onOpenEditTaskModal: (task: Task) => void;
    onOpenDeleteTaskModal: (task: Task) => void;
    onCloseAddTaskModal: () => void;
    onCloseEditTaskModal: () => void;
    onCloseDeleteTaskModal: () => void;
    keyword: string;
    setKeyword: (keyword: string) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
    addTaskModal: {
        isOpen: false,
        defaultStatus: "todo"
    },
    isEditTaskModalOpen: false,
    isDeleteTaskModalOpen: false,
    selectedTask: null,
    onOpenAddTaskModal: (status) => set({addTaskModal: {
        isOpen: true,
        defaultStatus: status
        }}),
    onOpenEditTaskModal: (task: Task) => set({isEditTaskModalOpen: true,
    selectedTask: task}),
    onOpenDeleteTaskModal: (task: Task) => set({isDeleteTaskModalOpen: true,
    selectedTask: task}),
    onCloseAddTaskModal: () => set({addTaskModal: {
        isOpen: false, defaultStatus: "todo"
        }}),
    onCloseEditTaskModal: () => set({
        isEditTaskModalOpen: false,
        selectedTask: null
    }),
    onCloseDeleteTaskModal: () => set({
        isDeleteTaskModalOpen: false,
        selectedTask: null
    }),
    keyword: "",
    setKeyword: (keyword) => set({keyword}),
}))