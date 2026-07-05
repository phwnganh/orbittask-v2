import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {getTaskStatusBadgeVariant} from "@/features/task/utils/task-status.util.ts";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import {getTaskActivityStatusDisplayed} from "@/features/task-detail/utils/getTaskActivityStatusDisplayed.util.ts";
type TaskActivityStatusProps = {
    activity: Activity;
}
const TaskActivityStatus = ({activity}: TaskActivityStatusProps) => {
    return (
        <TaskActivityChanged label={"Change Status:"} from={
            <div className={"flex items-center gap-2"}>
                <Badge size={"sm"} variant={getTaskStatusBadgeVariant(activity.metadata.from)}>{getTaskActivityStatusDisplayed(activity.metadata.from)}</Badge>
            </div>
        } to={
            <div className={"flex items-center gap-2"}>
                <Badge size={"sm"} variant={getTaskStatusBadgeVariant(activity.metadata.to)}>{getTaskActivityStatusDisplayed(activity.metadata.to)}</Badge>
            </div>
        }/>
    );
};

export default TaskActivityStatus;