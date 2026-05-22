import {TASK_PRIORITIES} from "@/features/task/constants/task-priority.constant.ts";

export const TASK_PRIORITY_VALUES = TASK_PRIORITIES.map(priority => priority.value) as [
    (typeof TASK_PRIORITIES)[number]["value"],
    ...(typeof TASK_PRIORITIES)[number]["value"][],
];

export const getTaskPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
        case 'low':
            return 'success';
        case 'medium':
            return 'warning';
        case 'high':
            return 'error';
    }
}