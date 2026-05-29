import Card from "@/shared/components/data-display/Card.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";
import type {Inbox} from "@/features/inbox/types/inbox.type.ts";
import {getTaskPriorityBadgeVariant} from "@/features/task/utils/task-priority.util.ts";
import {getDueDateStatus} from "@/features/task/utils/task-date.util.ts";

type InboxCardProps = {
    inbox: Inbox;
}
const InboxCard = ({inbox}: InboxCardProps) => {
    const dueDateStatus = getDueDateStatus(inbox.due_date, inbox.status === "completed")

    return (
        <Card className={"group cursor-pointer"}>
            <div className={"flex items-start gap-3"}>
                {/* complete button */}
                <button
                    className={
                        "mt-0.5 w-5 h-5 rounded-full border-2 border-border-primary shrink-0 hover:border-primary transition-colors"
                    }
                />

                {/* content */}
                <div className={"flex flex-1 flex-col justify-between min-w-0"}>
                    {/* top content */}
                    <div>
                        {/* title */}
                        <div className={"flex items-center gap-2 flex-wrap"}>
                            <h3
                                className={
                                    "text-sm font-semibold text-text-primary truncate"
                                }
                            >
                                {inbox.title}
                            </h3>

                            <Badge
                                size={"sm"}
                                className={"capitalize"}
                                variant={getTaskPriorityBadgeVariant(
                                    inbox.priority
                                )}
                            >
                                {inbox.priority}
                            </Badge>
                        </div>

                        {/* metadata */}
                        <div
                            className={
                                "mt-1.5 flex items-center gap-2 flex-wrap text-xs text-text-muted"
                            }
                        >
                            <span>{inbox.project_title}</span>
                            <span>•</span>
                            <span>Assigned to you</span>
                        </div>

                        {/* description */}
                        <p
                            className={
                                "mt-1.5 text-sm text-text-secondary line-clamp-2"
                            }
                        >
                            {inbox.description}
                        </p>
                    </div>

                    {/* bottom content */}
                    <div className={"mt-3"}>
                        <Badge
                            size={"sm"}
                            variant={dueDateStatus.variant}
                        >
                            {dueDateStatus.label}
                        </Badge>
                    </div>
                </div>

                {/* menu */}
                <div className={"shrink-0"}>
                    <Dropdown>
                        <DropdownTrigger>
                            {(props) => (
                                <MenuDotsButton {...props} />
                            )}
                        </DropdownTrigger>
                    </Dropdown>
                </div>
            </div>
        </Card>
    );
};

export default InboxCard;