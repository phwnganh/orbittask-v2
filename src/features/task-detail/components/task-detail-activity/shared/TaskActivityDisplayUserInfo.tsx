import type { Profile } from "@/features/auth/types/auth.type";
import { getUserDisplayName } from "@/features/task-detail/utils/task-activity-user-display.util";
import Avatar from "@/shared/components/avatar/Avatar";
import { formatDistanceToNow } from "date-fns";
import type { ReactNode } from "react";

type TaskActivityDisplayUserInfoProps = {
  userId: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  createdAt: string | null;
  updatedAt?: string | null;
  showEdited?: boolean;
  children: ReactNode;
  me?: Profile | null;
};
const TaskActivityDisplayUserInfo = ({
  userId,
  firstName,
  lastName,
  avatarUrl,
  createdAt,
  updatedAt,
  showEdited = false,
  children,
  me,
}: TaskActivityDisplayUserInfoProps) => {
  const displayName = getUserDisplayName(
    { id: userId, first_name: firstName, last_name: lastName },
    me?.id,
  );
  const createdAtDate = createdAt ? new Date(createdAt) : null;
  const updatedAtDate = updatedAt ? new Date(updatedAt) : null;
  const isCreatedAtValid =
    createdAtDate instanceof Date && !Number.isNaN(createdAtDate.getTime());
  const isUpdatedAtValid =
    updatedAtDate instanceof Date && !Number.isNaN(updatedAtDate.getTime());
  const createdAtLabel = isCreatedAtValid
    ? formatDistanceToNow(createdAtDate, { addSuffix: true })
    : "";

  const updatedAtLabel = isUpdatedAtValid
    ? formatDistanceToNow(updatedAtDate, { addSuffix: true })
    : "";

  const timeLabel =
    showEdited && isUpdatedAtValid
      ? `Edited ${updatedAtLabel}`
      : createdAtLabel;
  return (
    <div className="flex min-w-0 gap-3 py-3">
      <Avatar size="sm" avatarUrl={avatarUrl} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-sm">{displayName}</span>

          <span className="text-xs text-text-secondary">{timeLabel}</span>
        </div>

        <div className="mt-1 text-sm text-text-primary">{children}</div>
      </div>
    </div>
  );
};

export default TaskActivityDisplayUserInfo;
