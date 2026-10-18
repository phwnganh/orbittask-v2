import FormModal from "@/shared/components/modal/FormModal.tsx";
import { useTaskStore } from "@/features/task/stores/task.store.ts";
import { useForm } from "react-hook-form";
import {
  type EditTaskFormValues,
  editTaskSchema,
} from "@/features/task/schemas/task.schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditTask } from "@/features/task/hooks/useEditTask.ts";
import { useEffect, useState } from "react";
import TaskFormFields from "@/features/task/components/task-form/TaskFormFields.tsx";
import { format, parseISO } from "date-fns";
import type { Member } from "@/features/member/types/member.type.ts";
import type { Profile } from "@/features/auth/types/auth.type.ts";
import Toast from "@/shared/components/feedback/Toast";

type EditTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  me?: Profile | null;
  users?: Member[];
};
const EditTaskModal = ({ isOpen, onClose, users, me }: EditTaskModalProps) => {
  const { selectedTask } = useTaskStore();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const isCreator = me?.id === selectedTask?.created_by;
  const isOwner = me?.id === selectedTask?.project_owner_id;

  const canManageTask = isCreator || isOwner;
  const form = useForm<EditTaskFormValues>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      assignee_id: "",
      due_date: new Date(),
      priority: "medium",
    },
  });

  const { reset } = form;

  useEffect(() => {
    if (isOpen && selectedTask) {
      reset({
        title: selectedTask.title,
        description: selectedTask.description ?? "",
        assignee_id: selectedTask.assignee_id,
        due_date: parseISO(selectedTask.due_date),
        priority: selectedTask.priority ?? "medium",
      });
    }
  }, [isOpen, selectedTask, reset]);

  const { mutate, isPending} = useEditTask();
  const handleSubmit = form.handleSubmit((data) => {
    if (!selectedTask) return;

    setErrorMessage("");
    mutate(
      {
        task_id: selectedTask.id,
        project_id: selectedTask.project_id,
        status: selectedTask.status,
        payload: {
          title: data.title,
          description: data.description,
          priority: data.priority,

          ...(canManageTask && {
            assignee_id: data.assignee_id,
            due_date: format(data.due_date, "yyyy-MM-dd"),
          }),
        },
      },
      {
        onSuccess: () => {
          form.reset();
          onClose?.();
        },
        onError: (error) => {
          setErrorMessage(error.message);
        },
      },
    );
  });
  return (
    <>
      <FormModal
        isOpen={isOpen}
        title={"Edit Task"}
        onSubmit={handleSubmit}
        onClose={onClose}
        isLoading={isPending}
      >
        <TaskFormFields<EditTaskFormValues>
          canEditTaskFields={canManageTask}
          register={form.register}
          control={form.control}
          errors={form.formState.errors}
          status={selectedTask?.status ?? "todo"}
          users={users}
          me={me}
          startDate={selectedTask?.start_date}
        />
      </FormModal>

      {isOpen && errorMessage && (
        <Toast
          variant="error"
          title="Unable to update task"
          message={errorMessage}
          onClose={() => setErrorMessage("")}
        />
      )}
    </>
  );
};

export default EditTaskModal;
