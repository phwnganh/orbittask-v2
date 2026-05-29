import CalendarHeader from "@/features/my-tasks/uis/calendars/calendar-section/CalendarHeader.tsx";
import CalendarWeekday from "@/features/my-tasks/uis/calendars/calendar-section/CalendarWeekday.tsx";
import CalendarTasks from "@/features/my-tasks/uis/calendars/calendar-section/CalendarTasks.tsx";
import type {Dispatch, SetStateAction} from "react";

type MyTaskCalendarProps = {
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>;
    currentMonth: Date;
    setCurrentMonth: Dispatch<SetStateAction<Date>>;
    calendarDays: Date[];

}
const MyTaskCalendar = ({selectedDate, setSelectedDate, currentMonth, setCurrentMonth, calendarDays}: MyTaskCalendarProps) => {
    return (
        <div
            className={
                "bg-bg-secondary border border-border-primary rounded-2xl p-4"
            }
        >
            <CalendarHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />

            <CalendarWeekday/>

            <CalendarTasks calendarDays={calendarDays} currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
    );
};

export default MyTaskCalendar;