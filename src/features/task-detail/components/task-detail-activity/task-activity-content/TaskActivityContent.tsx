import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import CommentActivity
    from "@/features/task-detail/components/task-detail-activity/task-activity-content/CommentActivity.tsx";
import TaskActivityAssignee
    from "@/features/task-detail/components/task-detail-activity/task-activity-assignee/TaskActivityAssignee.tsx";
import TaskActivityStatus
    from "@/features/task-detail/components/task-detail-activity/task-activity-status/TaskActivityStatus.tsx";
import TaskActivityPriority
    from "@/features/task-detail/components/task-detail-activity/task-activity-status/TaskActivityPriority.tsx";

type TaskActivityContentProps = {
    activity: Activity;
}
const TaskActivityContent = ({activity}: TaskActivityContentProps) => {
    switch (activity.action_type) {
        case "comment":
            return <CommentActivity
                content={activity.metadata.content ?? ""}
            />
        case "task_created":
            return <p className="mt-1 text-sm text-text-secondary">
                created this task
            </p>
        case "status_changed":
            return <TaskActivityStatus activity={activity}/>
        case "priority_changed":
            return <TaskActivityPriority activity={activity}/>
        case "content_changed":
            return <p className="mt-1 text-sm text-text-secondary">
                Updated Task Details
            </p>
        case "assignee_changed":
            return <TaskActivityAssignee activity={activity}/>
    }
};

export default TaskActivityContent;