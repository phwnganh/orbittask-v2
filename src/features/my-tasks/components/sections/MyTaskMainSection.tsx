import { useMemo, useState } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import MyTaskStatistic from "@/features/my-tasks/components/uis/statistics/MyTaskStatistic.tsx";
import MyToDoTasks from "@/features/my-tasks/components/uis/todo-tasks/MyToDoTasks.tsx";
import MyTaskCalendar from "@/features/my-tasks/components/uis/calendars/MyTaskCalendar.tsx";
import {useGetMyTasks} from "@/features/my-tasks/hooks/useGetMyTasks.ts";
import {useGetMyTaskStatistics} from "@/features/my-tasks/hooks/useGetMyTaskStatistics.ts";



const MyTaskMainSection = () => {
  const {data: myTasks} = useGetMyTasks()
  const {data: statistics} = useGetMyTaskStatistics()

  console.log("statistics raw:", statistics);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    return eachDayOfInterval({
      start: startOfWeek(monthStart, { weekStartsOn: 1 }),
      end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
    });
  }, [currentMonth]);

  const selectedDateTasks = useMemo(() => {
    return myTasks?.filter((task) =>
      task.status !== "completed" && isSameDay(new Date(task.due_date), selectedDate),
    );
  }, [selectedDate, myTasks]);
  return (
    <>
      <MyTaskStatistic statistics={statistics}/>
      <div className={"grid grid-cols-[1fr_340px] gap-6 h-full px-4 overflow-y-auto scrollbar-custom"}>
        <MyTaskCalendar myTasks={myTasks} calendarDays={calendarDays} selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
        <MyToDoTasks selectedDate={selectedDate} selectedDateTasks={selectedDateTasks}/>
      </div>
    </>
  );
};

export default MyTaskMainSection;
