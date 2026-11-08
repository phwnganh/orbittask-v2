import type { Activity } from "@/features/task-detail/types/activity.type.ts";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import type { Profile } from "@/features/auth/types/auth.type";
import { getUserDisplayName } from "@/features/task-detail/utils/task-activity-user-display.util";
type TaskActivityAssigneeProps = {
  activity: Activity;
  me?: Profile | null;
};
const TaskActivityAssignee = ({
  activity,
  me,
}: TaskActivityAssigneeProps) => {
  const fromUser = activity.metadata.from_user;
  const toUser = activity.metadata.to_user;

  return (
    <TaskActivityChanged
      label={"Change Assignee:"}
      from={
        <div className={"flex items-center gap-2"}>
          <Avatar size={"xs"} avatarUrl={fromUser?.avatar_url} />
          <span className={"text-sm text-text-secondary line-through"}>
            {getUserDisplayName(fromUser, me?.id)}
          </span>
        </div>
      }
      to={
        <div className={"flex items-center gap-2"}>
          <Avatar size={"xs"} avatarUrl={toUser?.avatar_url} />
          <span className={"text-sm"}>
            {getUserDisplayName(toUser, me?.id)}
          </span>
        </div>
      }
    />
  );
};

export default TaskActivityAssignee;
