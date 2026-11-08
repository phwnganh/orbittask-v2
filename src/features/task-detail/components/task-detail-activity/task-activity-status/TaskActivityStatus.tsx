import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {getTaskStatusBadgeVariant} from "@/features/task/utils/task-status.util.ts";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import {getTaskActivityStatusDisplayed} from "@/features/task-detail/utils/task-activity-status.util.ts";
import type { TaskStatus } from "@/features/task/types/task.type";
type TaskActivityStatusProps = {
    activity: Activity;
}
const TaskActivityStatus = ({activity}: TaskActivityStatusProps) => {
    const fromStatus = activity.metadata?.from as TaskStatus | undefined;
    const toStatus = activity.metadata?.to as TaskStatus | undefined;

    if (!fromStatus || !toStatus) {
        return null;
    }
    return (
        <TaskActivityChanged label={"Change Status:"} from={
            <div className={"flex items-center gap-2"}>
                <Badge size={"sm"} variant={getTaskStatusBadgeVariant(fromStatus)}>{getTaskActivityStatusDisplayed(fromStatus)}</Badge>
            </div>
        } to={
            <div className={"flex items-center gap-2"}>
                <Badge size={"sm"} variant={getTaskStatusBadgeVariant(toStatus)}>{getTaskActivityStatusDisplayed(toStatus)}</Badge>
            </div>
        }/>
    );
};

export default TaskActivityStatus;