import type {Task} from "@/features/task/types/task.type.ts";
import {format} from "date-fns";

type MyToDoTasksHeaderProps = {
    selectedDate: Date
    selectedDateTasks: Task[]
}
const ToDoTasksHeader = ({selectedDate, selectedDateTasks}: MyToDoTasksHeaderProps) => {
    return (
        <div className={"mb-6"}>
            <h2 className={"text-lg font-semibold"}>
                {format(selectedDate, "MMMM d")}
            </h2>
            <p className={"text-sm text-text-secondary mt-1"}>
                {format(selectedDate, "EEEE")} • {selectedDateTasks.length} tasks
            </p>
        </div>
    );
};

export default ToDoTasksHeader;