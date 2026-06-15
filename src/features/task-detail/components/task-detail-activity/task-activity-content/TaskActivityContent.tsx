import type {Activity} from "@/features/task-detail/types/activity.type.ts";

type TaskActivityContentProps = {
    activity: Activity;
}
const TaskActivityContent = ({activity}: TaskActivityContentProps) => {
    switch (activity.action_type) {
        case "comment":
            return <p className={"mt-1 text-sm"}>{activity.metadata.content}</p>
        case "task_created":
            return <p className="mt-1 text-sm text-text-secondary">
                created this task
            </p>
        case "status_changed":
            return <p className="mt-1 text-sm">
                changed status from
                <strong> {activity.metadata.from} </strong>
                to
                <strong> {activity.metadata.to}</strong>
            </p>
        case "content_changed":
            return <p className="mt-1 text-sm text-text-secondary">
                updated task details
            </p>
    }
};

export default TaskActivityContent;