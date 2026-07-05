import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import ArrowRight from '@/assets/icons/arrow-right-icon.svg?react'
type TaskActivityAssigneeProps = {
    activity: Activity;
}
const TaskActivityAssignee = ({activity}: TaskActivityAssigneeProps) => {
    return (
        <div className={"space-y-2"}>
            <p className={"text-sm text-text-secondary"}>Change Assignee:</p>

            <div className={"flex items-center gap-3"}>
                <div className={"flex items-center gap-2"}>
                    <Avatar size={"xs"} avatarUrl={activity.metadata.from_user?.avatar_url}/>
                    <span className={"text-sm text-text-secondary line-through"}>{activity.metadata.from_user?.first_name} {activity.metadata.from_user?.last_name}</span>
                </div>

                <div className={"flex justify-center items-center"}>
                    <ArrowRight className={"w-3 h-3 shrink-0 text-text-primary"}/>
                </div>

                <div className={"flex items-center gap-2"}>
                    <Avatar size={"xs"} avatarUrl={activity.metadata.to_user?.avatar_url}/>
                    <span className={"text-sm"}>{activity.metadata.to_user?.first_name} {activity.metadata.to_user?.last_name}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskActivityAssignee;