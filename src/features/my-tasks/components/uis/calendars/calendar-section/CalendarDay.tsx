import { sortTasksByAttention } from "@/features/my-tasks/utils/tasks.util.ts";
import { MOCK_TASKS } from "@/features/my-tasks/components/sections/MyTaskMainSection.tsx";
import { format, isSameDay, isSameMonth, isToday } from "date-fns";
import type { Dispatch, SetStateAction } from "react";
import TaskBadge from "@/features/my-tasks/uis/task-badge/TaskBadge.tsx";
type CalendarDayProps = {
  day: Date;
  currentMonth: Date;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
};
const CalendarDay = ({
  day,
  currentMonth,
  selectedDate,
  setSelectedDate,
}: CalendarDayProps) => {
  const tasks = sortTasksByAttention(
    MOCK_TASKS.filter(
      (task) =>
        task.status !== "completed" && isSameDay(new Date(task.due_date), day),
    ),
  );

  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isSelected = isSameDay(day, selectedDate);
  return (
    <button
      key={day.toISOString()}
      onClick={() => setSelectedDate(day)}
      className={`min-h-27.5 rounded-2xl p-2 text-left border transition-all flex flex-col gap-1 hover:bg-bg-tertiary
      ${isSelected ? "border-primary ring-2 ring-primary" : "border-transparent"}
      ${isToday(day) ? "bg-bg-info" : "bg-bg-primary"}
      ${!isCurrentMonth ? "opacity-35" : ""}`}
    >
      <span className={"text-sm font-medium"}>{format(day, "d")}</span>

      <div className={"space-y-1 mt-1"}>
        {tasks.slice(0, 2).map((task) => (
          <TaskBadge key={task.id} task={task} />
        ))}

        {tasks.length > 2 && (
          <p className={"text-xs text-text-muted"}>+{tasks.length - 2} more</p>
        )}
      </div>
    </button>
  );
};

export default CalendarDay;
