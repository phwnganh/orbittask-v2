import {create} from "zustand";
import type {Task} from "@/features/task/types/task.type.ts";

type AddTaskModalState = {
    isOpen: boolean;
    defaultStatus: Task["status"] | null;
}
type TaskState = {
    addTaskModal: AddTaskModalState;
    editTaskModal: Task | null;
    deleteTaskModal: Task | null;
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
        defaultStatus: null
    },
    editTaskModal: null,
    deleteTaskModal: null,
    onOpenAddTaskModal: (status) => set({addTaskModal: {
        isOpen: true,
        defaultStatus: status
        }}),
    onOpenEditTaskModal: (task: Task) => set({editTaskModal: task}),
    onOpenDeleteTaskModal: (task: Task) => set({deleteTaskModal: task}),
    onCloseAddTaskModal: () => set({addTaskModal: {
        isOpen: false, defaultStatus: null
        }}),
    onCloseEditTaskModal: () => set({editTaskModal: null}),
    onCloseDeleteTaskModal: () => set({deleteTaskModal: null}),
    keyword: "",
    setKeyword: (keyword) => set({keyword}),
}))