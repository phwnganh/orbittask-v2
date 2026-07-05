import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {format} from "date-fns";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import {getTaskActivityDueDateBadgeVariant} from "@/features/task-detail/utils/task-activity-dueDate.util.ts";

type TaskActivityDueDateProps = {
    activity: Activity;
}
const TaskActivityDueDate = ({activity}: TaskActivityDueDateProps) => {
    return (
        <TaskActivityChanged label={"Change Due Date:"} from={
            <Badge variant={getTaskActivityDueDateBadgeVariant(activity.metadata.from)} size={"sm"}>{format(new Date(activity.metadata.from), "MMM d")}</Badge>
        }
        to={
            <Badge variant={getTaskActivityDueDateBadgeVariant(activity.metadata.to)} size={"sm"}>{format(new Date(activity.metadata.to), "MMM d")}</Badge>
        }/>
    );
};

export default TaskActivityDueDate;