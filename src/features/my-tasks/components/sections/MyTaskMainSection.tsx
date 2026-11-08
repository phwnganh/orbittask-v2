import { type Dispatch, type SetStateAction, useMemo } from "react";
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
import { useGetMyTasks } from "@/features/my-tasks/hooks/useGetMyTasks.ts";
import { useGetMyTaskStatistics } from "@/features/my-tasks/hooks/useGetMyTaskStatistics.ts";

type MyTaskMainSectionProps = {
  currentMonth: Date;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
};

const MyTaskMainSection = ({
  currentMonth,
  selectedDate,
  setSelectedDate,
  setCurrentMonth,
}: MyTaskMainSectionProps) => {
  const { data: myTasks } = useGetMyTasks();
  const { data: statistics } = useGetMyTaskStatistics();

  console.log("statistics raw:", statistics);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    return eachDayOfInterval({
      start: startOfWeek(monthStart, { weekStartsOn: 1 }),
      end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
    });
  }, [currentMonth]);

  const selectedDateTasks = useMemo(() => {
    return myTasks?.filter(
      (task) =>
        task.status !== "completed" &&
        isSameDay(new Date(task.due_date), selectedDate),
    );
  }, [selectedDate, myTasks]);
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 sm:gap-6">
      <MyTaskStatistic statistics={statistics} />
      <div
        className={
          "grid min-h-0 flex-1 grid-cols-1 items-start gap-4 overflow-y-auto px-1 scrollbar-custom sm:gap-6 sm:px-4 xl:grid-cols-[minmax(0,1fr)_340px]"
        }
      >
        <MyTaskCalendar
          myTasks={myTasks}
          calendarDays={calendarDays}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <MyToDoTasks
          selectedDate={selectedDate}
          selectedDateTasks={selectedDateTasks}
        />
      </div>
    </div>
  );
};

export default MyTaskMainSection;
