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
import GripVertical from '@/assets/icons/grip-vertical-icon.svg?react'
import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";

type TaskCardProps = {
    task: Task;
    isDragOverlay?: boolean;
}
const TaskCard = ({task, isDragOverlay = false}: TaskCardProps) => {
    const dueDateStatus = getDueDateStatus(task.due_date, task.status === "completed")
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: task.id,
        data: {status: task.status, task},
        disabled: isDragOverlay,
    })

    const style = isDragOverlay ? undefined : {
        transform: CSS.Translate.toString(transform),
    }
    return (
        <div ref={isDragOverlay ? undefined : setNodeRef} style={style} className={`${isDragging && !isDragOverlay ? "opacity-30" : ""} ${isDragOverlay ? "rotate-2 scale-[1.02] z-50" : ""}`}>
            <Card className={`flex flex-col gap-4 ${isDragOverlay ? "shadow-2xl ring-2 ring-primary" : ""}`}>
                <div className={"flex items-center gap-2"}>
                    <div className={"flex items-center gap-2 flex-1 min-w-0"}>
                        <button
                            {...(isDragOverlay ? {} : listeners)}
                            {...(isDragOverlay ? {} : attributes)}
                            className={"flex justify-center items-center w-4 h-4 shrink-0 text-text-primary cursor-grab active:cursor-grabbing"}
                        >
                            <GripVertical className={"w-4 h-4"}/>
                        </button>
                        <div className={"space-y-1 min-w-0"}>
                            <h1 className={"text-text-primary font-bold"}>{task.title}</h1>
                            <p className={"text-sm text-text-secondary line-clamp-1"}>{task.description}</p>
                        </div>
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
                    <Avatar size={"xs"} avatarUrl={task?.avatar_url}/>
                </div>



            </Card>
        </div>

    );
};

export default TaskCard;