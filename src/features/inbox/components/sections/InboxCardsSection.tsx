import InboxCard from "@/features/inbox/components/uis/inbox-card/InboxCard.tsx";
import type { Inbox } from "@/features/inbox/types/inbox.type.ts";
import InboxCardSkeleton from "@/features/inbox/components/uis/inbox-card/InboxCardSkeleton.tsx";
import TaskEmpty from "@/features/task/components/uis/states/TaskEmpty.tsx";
import { useCompleteTask } from "@/features/my-tasks/hooks/useCompleteTask";
import { useState } from "react";
import Toast from "@/shared/components/feedback/Toast";

type InboxCardsSectionProps = {
  inboxes: Inbox[];
  isLoading?: boolean;
};
const InboxCardsSection = ({ inboxes, isLoading }: InboxCardsSectionProps) => {
  const { mutate } = useCompleteTask();
  const [message, setMessage] = useState({
    errorMessage: "",
    successMessage: "",
  });

  const handleCompleteTask = (task: Inbox) => {
    setMessage({ errorMessage: "", successMessage: "" });
    mutate(
      {
        task_id: task.id,
        project_id: task.project_id,
      },
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
  if (isLoading) {
    return (
      <div className={"flex flex-col gap-3"}>
        {Array.from({ length: 5 }).map((_, index) => (
          <InboxCardSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <>
      {inboxes && inboxes.length > 0 ? (
        <div className={"flex flex-col gap-3"}>
          {inboxes.map((inbox) => (
            <InboxCard
              key={inbox.id}
              inbox={inbox}
              onComplete={handleCompleteTask}
            />
          ))}
        </div>
      ) : (
        <div className={"h-full"}>
          <TaskEmpty />
        </div>
      )}

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
    </>
  );
};

export default InboxCardsSection;
