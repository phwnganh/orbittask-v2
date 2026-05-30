import { format, isSameDay, isSameMonth, isToday } from "date-fns";
import type { Dispatch, SetStateAction } from "react";
import TaskBadge from "@/features/my-tasks/components/uis/task-badge/TaskBadge.tsx";
import type {MyTask} from "@/features/my-tasks/types/my-task.type.ts";
type CalendarDayProps = {
  day: Date;
  currentMonth: Date;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  myTasks?: MyTask[]
};
const CalendarDay = ({
  day,
  currentMonth,
  selectedDate,
  setSelectedDate,
    myTasks
}: CalendarDayProps) => {
  const tasks =
    myTasks?.filter(
      (task) =>
        task.status !== "completed" && isSameDay(new Date(task.due_date), day),
    )

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
        {tasks?.slice(0, 2).map((task) => (
          <TaskBadge key={task.id} task={task} />
        ))}

        {tasks && tasks.length > 2 && (
          <p className={"text-xs text-text-muted"}>+{tasks.length - 2} more</p>
        )}
      </div>
    </button>
  );
};

export default CalendarDay;
