import TaskActivityChanged from "@/features/task-detail/components/task-detail-activity/shared/TaskActivityChanged.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import {format} from "date-fns";
import type {Activity} from "@/features/task-detail/types/activity.type.ts";
import {getTaskActivityDueDateBadgeVariant} from "@/features/task-detail/utils/task-activity-dueDate.util.ts";

type TaskActivityDueDateProps = {
    activity: Activity;
}
const TaskActivityDueDate = ({activity}: TaskActivityDueDateProps) => {
    const fromDueDate = activity.metadata?.from as string | undefined;
    const toDueDate = activity.metadata?.to as string | undefined;

    if (!fromDueDate || !toDueDate) {
        return null;
    }
    return (
        <TaskActivityChanged label={"Change Due Date:"} from={
            <Badge variant={getTaskActivityDueDateBadgeVariant(fromDueDate)} size={"sm"}>{format(new Date(fromDueDate), "MMM d")}</Badge>
        }
        to={
            <Badge variant={getTaskActivityDueDateBadgeVariant(toDueDate)} size={"sm"}>{format(new Date(toDueDate), "MMM d")}</Badge>
        }/>
    );
};

export default TaskActivityDueDate;