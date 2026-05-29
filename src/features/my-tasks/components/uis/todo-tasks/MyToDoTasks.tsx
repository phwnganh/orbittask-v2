import type { Task } from "@/features/task/types/task.type.ts";
import ToDoTasksHeader from "@/features/my-tasks/uis/todo-tasks/todo-tasks-section/ToDoTasksHeader.tsx";
import MyTaskEmpty from "@/features/my-tasks/uis/states/MyTaskEmpty.tsx";
import ToDoTaskCard from "@/features/my-tasks/uis/todo-tasks/todo-tasks-section/ToDoTaskCard.tsx";

type MyToDoTasksProps = {
  selectedDate: Date;
  selectedDateTasks: Task[];
};
const MyToDoTasks = ({ selectedDate, selectedDateTasks }: MyToDoTasksProps) => {
  return (
    <div
      className={
        "bg-bg-secondary border border-border-primary rounded-2xl p-4 h-fit"
      }
    >
      <ToDoTasksHeader selectedDate={selectedDate} selectedDateTasks={selectedDateTasks} />

      <div className={"space-y-3"}>
        {selectedDateTasks.length === 0 ? (
          <div
            className={
              "border border-dashed border-border-primary rounded-2xl p-6 text-center"
            }
          >
            <MyTaskEmpty/>
          </div>
        ) : (
          selectedDateTasks.map((task) =>
          <ToDoTaskCard key={task.id} task={task}/>)
        )}
      </div>
    </div>
  );
};

export default MyToDoTasks;
