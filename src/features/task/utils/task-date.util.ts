import {differenceInCalendarDays, format, startOfDay} from "date-fns";

type DueDateStatus = {
    variant: string;
    label: string;
    fullDate?: string;
}
export const getDueDateStatus = (dueDate?: Date, completed?: boolean): DueDateStatus => {
    if(!dueDate){
        return {
            variant: "default",
            label: "No Due Date"
        };
    }

    const today = startOfDay(new Date());
    const target = startOfDay(dueDate);
    const diffDays = differenceInCalendarDays(target, today);
    if(completed){
        return {
            variant: "success",
            label: "Completed",
            fullDate: format(target, "MMM d")
        };
    }

    if(today){
        return {
            variant: "warning",
            label: "Today",
            fullDate: format(target, "MMM d")
        }
    }

    if(diffDays > 0){
        if(diffDays === 1){
            return {
                variant: "warning",
                label: "Tomorrow",
                fullDate: format(target, "MMM d")
            }
        }
        return {
            variant: "warning",
            label: `${diffDays}d left`,
            fullDate: format(target, "MMM d")
        }
    }

    return {
        variant: "error",
        label: `Overdue ${Math.abs(diffDays)}d`,
        fullDate: format(target, "MMM d")
    };
}