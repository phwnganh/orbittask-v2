import Card from "@/shared/components/data-display/Card.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import Avatar from "@/shared/components/avatar/Avatar.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import {getDueDateStatus} from "@/features/task/utils/task-date.util.ts";

const TaskCard = () => {
    return (
        <Card className={"flex flex-col gap-4"}>
            <div className={"flex items-center justify-between"}>
                <div className={"space-y-1 min-w-0"}>
                    <h1 className={"text-text-primary font-bold"}>Title</h1>
                    <p className={"text-sm text-text-secondary line-clamp-1"}>Description aaaaaaaaaaa</p>
                </div>
                <Dropdown>
                    <DropdownTrigger>
                        {(props) => <MenuDotsButton {...props}/>}
                    </DropdownTrigger>
                </Dropdown>
            </div>

            <div className={"flex items-center justify-between"}>
                <div className={"flex items-center gap-1.5"}>
                    <Badge size={"sm"} variant={getTaskPriorityBadgeVariant('medium')}>Medium</Badge>
                    {/*<Badge variant={getDueDateStatus}></Badge>*/}
                </div>
                <Avatar size={"xs"}/>
            </div>



        </Card>
    );
};

export default TaskCard;