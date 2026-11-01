import ToDoTasksHeader from "@/features/my-tasks/components/uis/todo-tasks/todo-tasks-section/ToDoTasksHeader.tsx";
import MyTaskEmpty from "@/features/my-tasks/components/uis/states/MyTaskEmpty.tsx";
import ToDoTaskCard from "@/features/my-tasks/components/uis/todo-tasks/todo-tasks-section/ToDoTaskCard.tsx";
import type { MyTask } from "@/features/my-tasks/types/my-task.type.ts";
import { useCompleteTask } from "@/features/my-tasks/hooks/useCompleteTask";
import Toast from "@/shared/components/feedback/Toast";
import { useState } from "react";

type MyToDoTasksProps = {
  selectedDate: Date;
  selectedDateTasks?: MyTask[];
};
const MyToDoTasks = ({ selectedDate, selectedDateTasks }: MyToDoTasksProps) => {
  const { mutate } = useCompleteTask();
  const [message, setMessage] = useState({
    errorMessage: "",
    successMessage: "",
  });

  const handleCompleteTask = (task: MyTask) => {
    setMessage({ errorMessage: "", successMessage: "" });
    mutate(
      { task_id: task.id, project_id: task.project_id },
      {
        onSuccess: (data) => {
          setMessage({ errorMessage: "", successMessage: data.message });
        },
        onError: (error) => {
          setMessage({ errorMessage: error.message, successMessage: "" });
        },
      },
    );
  };

  return (
    <div
      className={
        "bg-bg-secondary border border-border-primary rounded-2xl p-4 h-fit"
      }
    >
      <ToDoTasksHeader
        selectedDate={selectedDate}
        selectedDateTasks={selectedDateTasks}
      />

      <div className={"space-y-3"}>
        {selectedDateTasks?.length === 0 ? (
          <div
            className={
              "border border-dashed border-border-primary rounded-2xl p-6 text-center"
            }
          >
            <MyTaskEmpty/>
          </div>
        ) : (
          selectedDateTasks?.map((task) => (
            <ToDoTaskCard
              key={task.id}
              task={task}
              onComplete={handleCompleteTask}
            />
          ))
        )}
      </div>

      {message.errorMessage && (
        <Toast
          variant="error"
          title="Unable to complete task"
          message={message.errorMessage}
          onClose={() =>
            setMessage((current) => ({ ...current, errorMessage: "" }))
          }
        />
      )}
      {message.successMessage && (
        <Toast
          variant="success"
          title="Complete Task"
          message={message.successMessage}
          onClose={() =>
            setMessage((current) => ({ ...current, successMessage: "" }))
          }
        />
      )}
    </div>
  );
};

export default MyToDoTasks;
