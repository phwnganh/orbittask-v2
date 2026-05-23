import Card from "@/shared/components/data-display/Card.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import {getDueDateStatus} from "@/features/task/utils/task-date.util.ts";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import TaskCardMenu from "@/features/task/components/task-card/TaskCardMenu.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskCardProps = {
    task: Task;
}
const TaskCard = ({task}: TaskCardProps) => {
    const dueDateStatus = getDueDateStatus(task.due_date, task.status === "completed")
    return (
        <Card className={"flex flex-col gap-4"}>
            <div className={"flex items-center justify-between"}>
                <div className={"space-y-1 min-w-0"}>
                    <h1 className={"text-text-primary font-bold"}>{task.title}</h1>
                    <p className={"text-sm text-text-secondary line-clamp-1"}>{task.description}</p>
                </div>
                <Dropdown>
                    <DropdownTrigger>
                        {(props) => <MenuDotsButton {...props}/>}
                    </DropdownTrigger>
                    <DropdownContent>
                        <TaskCardMenu task={task}/>
                    </DropdownContent>
                </Dropdown>
            </div>

            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-1.5"}>
                    <Badge size={"sm"} className={"capitalize"} variant={getTaskPriorityBadgeVariant(task.priority)}>{task.priority}</Badge>
                    <Badge size={"sm"} variant={dueDateStatus.variant}>{dueDateStatus.label}</Badge>
                </div>
                <Avatar size={"xs"} avatarUrl={task.assignee?.avatar_url}/>
            </div>



        </Card>
    );
};

export default TaskCard;