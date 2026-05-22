import {differenceInCalendarDays, format, isToday, startOfDay} from "date-fns";

type DueDateStatus = {
    variant: "default" | "error" | "success" | "warning" | "info";
    label: string;
    fullDate: string;
}
export const getDueDateStatus = (dueDate?: string, completed?: boolean): DueDateStatus => {
    if(!dueDate){
        return {
            variant: "default",
            label: "No Due Date",
            fullDate: ""
        };
    }

    const today = startOfDay(new Date());
    const target = startOfDay(new Date(dueDate));
    const diffDays = differenceInCalendarDays(target, today);
    const fullDate = format(target, "MMM d");
    if(completed){
        return {
            variant: "success",
            label: fullDate,
            fullDate: fullDate,
        };
    }

    if(isToday(target)){
        return {
            variant: "warning",
            label: "Today",
            fullDate: fullDate,
        }
    }

    if(diffDays > 0){
        if (diffDays === 1) {
            return {
                variant: "warning",
                label: "Tomorrow",
                fullDate: fullDate,
            };
        }
        return {
            variant: "warning",
            label: `${diffDays}d left`,
            fullDate: fullDate,
        };
    }

    return {
        variant: "error",
        label: `Overdue ${Math.abs(diffDays)}d`,
        fullDate: fullDate,
    };
}