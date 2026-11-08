import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import type {TaskPriority} from "@/features/task/types/task.type.ts";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import {getTaskActivityPriorityDisplayed} from "@/features/task-detail/utils/task-activity-priority.util.ts";
type TaskActivityPriorityProps = {
    activity: Activity;
}

const TaskActivityPriority = ({activity}: TaskActivityPriorityProps) => {
    const fromPriority = activity.metadata?.from as TaskPriority | undefined;
    const toPriority = activity.metadata?.to as TaskPriority | undefined;

    if (!fromPriority || !toPriority) {
        return null;
    }

    return (
        <TaskActivityChanged label={"Change Priority:"} from={
            <div className={"flex items-center gap-2"}>
                <Badge size={"sm"} variant={getTaskPriorityBadgeVariant(fromPriority)}>{getTaskActivityPriorityDisplayed(fromPriority)}</Badge>
            </div>
        } to={<div className={"flex items-center gap-2"}>
            <Badge size={"sm"} variant={getTaskPriorityBadgeVariant(toPriority)}>{getTaskActivityPriorityDisplayed(toPriority)}</Badge>
        </div>}/>
    );
};

export default TaskActivityPriority;