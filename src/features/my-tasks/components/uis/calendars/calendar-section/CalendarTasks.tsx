
import type {Dispatch, SetStateAction} from "react";
import CalendarDay from  "@/features/my-tasks/components/uis/calendars/calendar-section/CalendarDay.tsx";
import type {MyTask} from "@/features/my-tasks/types/my-task.type.ts";

type CalendarTasksProps = {
    currentMonth: Date;
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>
    calendarDays: Date[];
    myTasks?: MyTask[]
}
const CalendarTasks = ({myTasks, currentMonth, selectedDate, setSelectedDate, calendarDays}: CalendarTasksProps) => {
    return (
        <div className={"grid w-full min-w-0 grid-cols-7 gap-1 sm:gap-2"}>
            {calendarDays.map((day, index) =>
            <CalendarDay key={index} myTasks={myTasks} day={day} currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>)}
        </div>
    );
};

export default CalendarTasks;