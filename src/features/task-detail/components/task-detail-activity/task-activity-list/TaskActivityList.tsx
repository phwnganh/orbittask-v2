import { useViewActivities } from "@/features/task-detail/hooks/useViewActivities.ts";
import type { Task } from "@/features/task/types/task.type.ts";
import TaskActivityItem from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityItem.tsx";
import ActivityEmpty from "../../uis/states/ActivityEmpty";

type TaskActivityListProps = {
  task: Task;
};
const TaskActivityList = ({ task }: TaskActivityListProps) => {
  const { data: activities } = useViewActivities(task.id);
  return (
    <div className={"space-y-4"}>
      {activities && activities.length > 0 ? (
        activities?.map((activity, index) => (
          <div
            key={`${activity.id ?? "activity"}-${activity.action_type}-${activity.created_at}-${index}`}
          >
            <TaskActivityItem task={task} activity={activity} />
          </div>
        ))
      ) : (
        <ActivityEmpty />
      )}
    </div>
  );
};

export default TaskActivityList;
