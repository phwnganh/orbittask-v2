import type {Task} from "@/features/task/types/task.type.ts";
import type {TaskBoardSortBy} from "@/features/task-board/types/task-board-menu-item.type.ts";

export const sortTasks = (tasks: Task[], sortBy: TaskBoardSortBy) => {
    const sorted = [...tasks];

    switch (sortBy) {
        case "newest":
            return sorted.reverse();
        case "oldest":
            return sorted;
        case "priority_high_to_low":
            return sorted.sort((a, b) => {
                const priorityMap = {
                    low: 1,
                    medium: 2,
                    high: 3
                }
                return (
                    priorityMap[b.priority] - priorityMap[a.priority]
                )
            });
        case "priority_low_to_high":
            return sorted.sort((a, b) => {
                const priorityMap = {
                    low: 1,
                    medium: 2,
                    high: 3
                }

                return (
                    priorityMap[a.priority] - priorityMap[b.priority]
                )
            })

        case "title_a_z":
            return sorted.sort((a, b) => a.title.localeCompare(b.title));

        case "title_z_a":
            return sorted.sort((a, b) => b.title.localeCompare(a.title));

        case "due_date_earliest":
            return sorted.sort(
                (a, b) =>
                    new Date(a.due_date).getTime() -
                    new Date(b.due_date).getTime()
            );

        case "due_date_latest":
            return sorted.sort((a, b) => new Date(b.due_date).getTime() - new Date(a.due_date).getTime());

        default:
            return sorted;
    }
}