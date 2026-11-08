import {create} from "zustand";
import type {Task} from "@/features/task/types/task.type.ts";

type OpenTaskDetailModalState = {
    isOpen: boolean;
    selectedTask: Task | null;
}
type TaskDetailState = {
    openTaskDetail: OpenTaskDetailModalState;
    onOpenTaskDetail: (task: Task) => void;
    onCloseTaskDetail: () => void;
}

export const useTaskDetailStore = create<TaskDetailState>((set) => ({
    openTaskDetail: {
        isOpen: false,
        selectedTask: null
    },
    onOpenTaskDetail: (task) => set({
        openTaskDetail: {
            isOpen: true,
            selectedTask: task
        }
    }),
    onCloseTaskDetail: () => set({openTaskDetail: {
        isOpen: false, selectedTask: null
        }}),
}))