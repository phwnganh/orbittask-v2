import type {TaskBoardSortBy} from "@/features/task-board/types/task-board-menu-item.type.ts";
import {create} from "zustand";
import type {TaskStatus} from "@/features/task/types/task.type.ts";

type TaskBoardStore = {
    sorts: Record<TaskStatus, TaskBoardSortBy>;
    setSort: (status: TaskStatus, sortBy: TaskBoardSortBy) => void;
}

export const useTaskBoardStore = create<TaskBoardStore>((set) => ({
    sorts: {
        todo: "newest",
        in_progress: "newest",
        completed: "newest",
    },
    setSort: (status, sortBy) => set(state => ({
        sorts: {
            ...state.sorts,
            [status]: sortBy,
        }
    }))
}))