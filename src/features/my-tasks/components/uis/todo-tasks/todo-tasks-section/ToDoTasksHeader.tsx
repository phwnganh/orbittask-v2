import {format} from "date-fns";
import type {MyTask} from "@/features/my-tasks/types/my-task.type.ts";

type MyToDoTasksHeaderProps = {
    selectedDate: Date
    selectedDateTasks?: MyTask[]
}
const ToDoTasksHeader = ({selectedDate, selectedDateTasks}: MyToDoTasksHeaderProps) => {
    return (
        <div className={"mb-6"}>
            <h2 className={"text-lg font-semibold"}>
                {format(selectedDate, "MMMM d")}
            </h2>
            <p className={"text-sm text-text-secondary mt-1"}>
                {format(selectedDate, "EEEE")} • {selectedDateTasks?.length} tasks
            </p>
        </div>
    );
};

export default ToDoTasksHeader;