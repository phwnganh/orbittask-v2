import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import CommentActivity
    from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentActivity.tsx";
import TaskActivityAssignee
    from "@/features/task-detail/components/task-detail-activity/task-activity-assignee/TaskActivityAssignee.tsx";
import TaskActivityStatus
    from "@/features/task-detail/components/task-detail-activity/task-activity-status/TaskActivityStatus.tsx";
import TaskActivityPriority
    from "@/features/task-detail/components/task-detail-activity/task-activity-status/TaskActivityPriority.tsx";
import TaskActivityDueDate
    from "@/features/task-detail/components/task-detail-activity/task-activity-duedate/TaskActivityDueDate.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskActivityContentProps = {
    activity: Activity;
    task: Task;
}
const TaskActivityContent = ({activity, task}: TaskActivityContentProps) => {
    switch (activity.action_type) {
        case "comment":
            return <CommentActivity
                userFirstName={activity.first_name}
                taskId={task.id}
                commentId={activity.metadata.comment_id ?? ""}
                content={activity.metadata.content ?? ""}
            />
        case "task_created":
            return <p className="mt-1 text-sm text-text-secondary">
                Created This Task
            </p>
        case "status_changed":
            return <TaskActivityStatus activity={activity}/>
        case "priority_changed":
            return <TaskActivityPriority activity={activity}/>
        case "due_date_changed":
            return <TaskActivityDueDate activity={activity}/>
        case "content_changed":
            return <p className="mt-1 text-sm text-text-secondary">
                Updated Task Details
            </p>
        case "assignee_changed":
            return <TaskActivityAssignee activity={activity}/>
    }
};

export default TaskActivityContent;