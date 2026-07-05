import {format, parseISO} from "date-fns";

export const formatTaskDueDate = (dueDate: string) => {
    return format(parseISO(dueDate), "MMM d");
}