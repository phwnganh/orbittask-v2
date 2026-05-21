import {isPast, isToday, startOfDay} from "date-fns";

type BadgeVariant = | "default" | "error" | "success" | "warning" | "info";

export const getDueDateVariant = (dueDate?: Date, completed?: boolean): BadgeVariant => {
    if(!dueDate){
        return "default";
    }
    if(completed){
        return "success";
    }

    const target = startOfDay(dueDate)

    if(isPast(target) && !isToday(target)){
        return "error";
    }
    if(isToday(target)){
        return "warning";
    }

    return "info";
}