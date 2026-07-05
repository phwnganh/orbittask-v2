import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import {getTaskActivityPriorityDisplayed} from "@/features/task-detail/utils/getTaskActivityPriorityDisplayed.util.ts";
type TaskActivityPriorityProps = {
    activity: Activity;
}
const TaskActivityPriority = ({activity}: TaskActivityPriorityProps) => {
    return (
        <TaskActivityChanged label={"Change Priority:"} from={
            <div className={"flex items-center gap-2"}>
                <Badge size={"sm"} variant={getTaskPriorityBadgeVariant(activity.metadata.from)}>{getTaskActivityPriorityDisplayed(activity.metadata.from)}</Badge>
            </div>
        } to={<div className={"flex items-center gap-2"}>
            <Badge size={"sm"} variant={getTaskPriorityBadgeVariant(activity.metadata.to)}>{getTaskActivityPriorityDisplayed(activity.metadata.to)}</Badge>
        </div>}/>
    );
};

export default TaskActivityPriority;