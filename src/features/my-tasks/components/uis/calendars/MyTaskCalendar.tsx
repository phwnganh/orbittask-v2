import CalendarHeader from "@/features/my-tasks/components/uis/calendars/calendar-section/CalendarHeader";
import CalendarWeekday from "@/features/my-tasks/components/uis/calendars/calendar-section/CalendarWeekday";
import CalendarTasks from "@/features/my-tasks/components/uis/calendars/calendar-section/CalendarTasks";
import type {Dispatch, SetStateAction} from "react";
import type {MyTask} from "@/features/my-tasks/types/my-task.type.ts";

type MyTaskCalendarProps = {
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
    currentMonth: Date;
    setCurrentMonth: Dispatch<SetStateAction<Date>>;
    calendarDays: Date[];
    myTasks?: MyTask[];
}
const MyTaskCalendar = ({myTasks, selectedDate, setSelectedDate, currentMonth, setCurrentMonth, calendarDays}: MyTaskCalendarProps) => {
    return (
        <div
            className={
                "bg-bg-secondary border border-border-primary rounded-2xl p-4"
            }
        >
            <CalendarHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />

            <CalendarWeekday/>

            <CalendarTasks myTasks={myTasks} calendarDays={calendarDays} currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
    );
};

export default MyTaskCalendar;