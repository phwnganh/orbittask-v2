import type { Task } from "@/features/task/types/task.type.ts";
import { useMemo, useState } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import MyTaskStatistic from "@/features/my-tasks/uis/statistics/MyTaskStatistic.tsx";
import MyToDoTasks from "@/features/my-tasks/uis/todo-tasks/MyToDoTasks.tsx";
import MyTaskCalendar from "@/features/my-tasks/uis/calendars/MyTaskCalendar.tsx";

export const MOCK_TASKS: Task[] = [
  {
    id: "1",
    project_id: "1",
    title: "Design dashboard UI",
    due_date: "2026-05-29",
    priority: "high",
    status: "todo",
    start_date: "2026-05-27",
    assignee_id: "1",
    created_by: "2026-05-27",
    description: "abc",
  },
  {
    id: "2",
    project_id: "1",
    title: "Fix Supabase RPC",
    due_date: "2026-05-29",
    priority: "medium",
    status: "todo",
    start_date: "2026-05-27",
    assignee_id: "1",
    created_by: "2026-05-27",
    description: "abc",
  },
  {
    id: "3",
    project_id: "1",
    title: "Prepare presentation",
    due_date: "2026-05-30",
    priority: "low",
    status: "todo",
    start_date: "2026-05-27",
    assignee_id: "1",
    created_by: "2026-05-27",
    description: "abc",
  },
  {
    id: "4",
    project_id: "1",
    title: "Write project report",
    due_date: "2026-05-30",
    priority: "high",
    status: "todo",
    start_date: "2026-05-27",
    assignee_id: "1",
    created_by: "2026-05-27",
    description: "abc",
  },
];


const MyTaskMainSection = () => {
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
    return MOCK_TASKS.filter((task) =>
      task.status !== "completed" && isSameDay(new Date(task.due_date), selectedDate),
    );
  }, [selectedDate]);
  return (
    <>
      <MyTaskStatistic/>
      <div className={"grid grid-cols-[1fr_340px] gap-6 h-full p-4 overflow-y-auto scrollbar-custom"}>
        <MyTaskCalendar calendarDays={calendarDays} selectedDate={selectedDate} setSelectedDate={setSelectedDate} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
        <MyToDoTasks selectedDate={selectedDate} selectedDateTasks={selectedDateTasks}/>
      </div>
    </>
  );
};

export default MyTaskMainSection;
