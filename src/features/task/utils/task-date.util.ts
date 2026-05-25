import {differenceInCalendarDays, format, isToday, startOfDay} from "date-fns";
import {isYesterday} from "date-fns/isYesterday";

type DateStatus = {
    variant: "default" | "error" | "success" | "warning" | "info";
    label: string;
    fullDate: string;
}
export const getDueDateStatus = (dueDate?: string, completed?: boolean): DateStatus => {
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

export const getStartDateStatus = (startDate?: string): DateStatus => {
    if(!startDate){
        return {
            variant: "default",
            label: "Today",
            fullDate: ""
        }
    }
    const today = startOfDay(new Date())
    const target = startOfDay(new Date(startDate));

    const diffDays = differenceInCalendarDays(today, target);
    const fullDate = format(target, 'MMM d, yyyy');

    if(isToday(target)){
        return {
            variant: "info",
            label: "Today",
            fullDate
        }
    }

    if(isYesterday(target)){
        return {
            variant: "default",
            label: "Yesterday",
            fullDate
        }
    }

    if(diffDays > 1 && diffDays <= 7){
        return {
            variant: "default",
            label: `${diffDays}d ago`,
            fullDate
        }
    }

    if(diffDays > 0){
        const futureDays = Math.abs(diffDays);
        if(futureDays === 1){
            return {
                variant: "info",
                label: "Tomorrow",
                fullDate
            }
        }
    }
    return {
        variant: "default",
        label: format(target, "MMM d"),
        fullDate
    }
}