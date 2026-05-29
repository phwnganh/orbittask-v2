
import type {Dispatch, SetStateAction} from "react";
import CalendarDay from "@/features/my-tasks/uis/calendars/calendar-section/CalendarDay.tsx";

type CalendarTasksProps = {
    currentMonth: Date;
    selectedDate: Date;
    setSelectedDate: Dispatch<SetStateAction<Date>>
    calendarDays: Date[];
}
const CalendarTasks = ({currentMonth, selectedDate, setSelectedDate, calendarDays}: CalendarTasksProps) => {
    return (
        <div className={"grid grid-cols-7 gap-2"}>
            {calendarDays.map((day, index) =>
            <CalendarDay key={index} day={day} currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>)}
        </div>
    );
};

export default CalendarTasks;