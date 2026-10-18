import { format, isSameDay, isSameMonth, isToday } from "date-fns";
import type { Dispatch, SetStateAction } from "react";
import TaskBadge from "@/features/my-tasks/components/uis/task-badge/TaskBadge.tsx";
import type { MyTask } from "@/features/my-tasks/types/my-task.type.ts";
import { getPriorityDotClass } from "@/features/my-tasks/utils/priority-dot-color.util";
type CalendarDayProps = {
  day: Date;
  currentMonth: Date;
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  myTasks?: MyTask[];
};
const CalendarDay = ({
  day,
  currentMonth,
  selectedDate,
  setSelectedDate,
  myTasks,
}: CalendarDayProps) => {
  const tasks = myTasks?.filter(
    (task) =>
      task.status !== "completed" && isSameDay(new Date(task.due_date), day),
  );
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isSelected = isSameDay(day, selectedDate);
  return (
    <button
      key={day.toISOString()}
      onClick={() => setSelectedDate(day)}
      className={`
        flex h-12 w-full min-w-0 flex-col items-stretch gap-1
        overflow-hidden rounded-lg border p-1 text-left
        transition-colors hover:bg-bg-tertiary
        sm:h-28 sm:rounded-2xl sm:p-2
        ${isSelected ? "border-primary ring-1 sm:ring-2 ring-primary" : "border-transparent"}
        ${isToday(day) ? "bg-bg-info" : "bg-bg-primary"}
        ${!isCurrentMonth ? "opacity-35" : ""}
      `}
    >
      <span className={"shrink-0 text-xs font-medium sm:text-sm"}>
        {format(day, "d")}
      </span>

      <div
        className={
          "hidden w-full min-w-0 flex-1 flex-col gap-1 overflow-hidden sm:flex"
        }
      >
        {tasks?.slice(0, 2).map((task) => (
          <div key={task.id} className="w-full min-w-0 overflow-hidden">
            <TaskBadge key={task.id} task={task} />
          </div>
        ))}

        {tasks && tasks.length > 2 && (
          <p className={"shrink-0 truncate text-xs text-text-muted"}>
            +{tasks.length - 2} more
          </p>
        )}
      </div>
      {Boolean(tasks?.length) && (
        <div className="mx-auto mt-0.5 flex shrink-0 gap-0.5 items-center rounded-full sm:hidden">
          {tasks?.slice(0, 3).map((task) => (
            <span
              key={task.id}
              className={`h-1 w-1 rounded-full ${getPriorityDotClass(task.priority)}`}
              aria-hidden="true"
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default CalendarDay;
