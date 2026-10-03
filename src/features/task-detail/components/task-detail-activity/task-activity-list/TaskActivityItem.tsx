import type { Activity } from "@/features/task-detail/types/activity.type.ts";
import TaskActivityHistory from "@/features/task-detail/components/task-detail-activity/task-activity-content/task-activity-history/TaskActivityHistory.tsx";
import type { Task } from "@/features/task/types/task.type.ts";
import TaskActivityDisplayUserInfo from "../shared/TaskActivityDisplayUserInfo";
import type { Profile } from "@/features/auth/types/auth.type";

type TaskActivityItemProps = {
  activity: Activity;
  task: Task;
  me?: Profile | null;
};
const TaskActivityItem = ({ activity, task, me }: TaskActivityItemProps) => {
  return (
    <TaskActivityDisplayUserInfo
      userId={activity.user_id}
      firstName={activity.first_name}
      lastName={activity.last_name}
      avatarUrl={activity.avatar_url}
      createdAt={activity.created_at}
      me={me}
    >
      <TaskActivityHistory task={task} activity={activity} me={me} />
    </TaskActivityDisplayUserInfo>
  );
};

export default TaskActivityItem;
