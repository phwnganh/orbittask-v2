import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
type TaskActivityAssigneeProps = {
    activity: Activity;
}
const TaskActivityAssignee = ({activity}: TaskActivityAssigneeProps) => {
    return (
        <TaskActivityChanged label={"Change Assignee:"} from={
            <div className={"flex items-center gap-2"}>
                <Avatar size={"xs"} avatarUrl={activity.metadata.from_user?.avatar_url}/>
                <span className={"text-sm text-text-secondary line-through"}>{activity.metadata.from_user?.first_name} {activity.metadata.from_user?.last_name}</span>
            </div>
        } to={
            <div className={"flex items-center gap-2"}>
                <Avatar size={"xs"} avatarUrl={activity.metadata.to_user?.avatar_url}/>
                <span className={"text-sm"}>{activity.metadata.to_user?.first_name} {activity.metadata.to_user?.last_name}</span>
            </div>
        }/>)
};

export default TaskActivityAssignee;