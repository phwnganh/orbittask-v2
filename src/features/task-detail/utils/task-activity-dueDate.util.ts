import {isPast, isToday, parseISO} from "date-fns";
import type {BadgeProps} from "@/shared/components/data-display/Badge.tsx";


export const getTaskActivityDueDateBadgeVariant = (dueDate: string): BadgeProps["variant"] => {
    const getDueDate = parseISO(dueDate)

    if(isToday(getDueDate)){
        return "warning";
    }
    if(isPast(getDueDate)){
        return "error";
    }
    return "info";
}