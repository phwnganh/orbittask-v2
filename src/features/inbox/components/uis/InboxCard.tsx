import Card from "@/shared/components/data-display/Card.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import MenuDotsButton from "@/shared/components/button/MenuDotsButton.tsx";

const InboxCard = () => {
    return (
        <Card
            className={`group cursor-pointer`}
        >
            <div className={"flex flex-start gap-3"}>
                {/* complete button */}
                <button
                    className={`mt-0.5 w-5 h-5 rounded-full border-2 border-border-primary shrink-0 hover:border-primary transition-colors`}
                />

                {/* content */}
                <div className={"flex-1 min-w-0"}>
                    {/* title row */}
                    <div className={"flex items-center gap-2 flex-wrap"}>
                        <h3 className={`text-sm font-semibold text-text-primary truncate`}
                        >
                            Design dashboard ui
                        </h3>

                        <Badge size={"sm"} variant={"error"}>
                            High
                        </Badge>

                        <Badge size={"sm"} variant={"warning"}>
                            Todo
                        </Badge>
                    </div>

                    {/* metadata */}
                    <div
                        className={`mt-2 flex items-center gap-2 flex-wrap text-xs text-text-muted`}
                    >
                        <span>Orbit Task</span>
                        <span>•</span>
                        <span>Assigned to you</span>
                    </div>

                    <Badge className={"mt-2"} size={"sm"} variant={"warning"}>Due tomorrow</Badge>
                    {/* description */}
                    <p className={`mt-1 text-sm text-text-secondary line-clamp-2
                `}
                    >
                        Create responsive task board layout and improve drag
                        and drop interaction for mobile devices.
                    </p>
                </div>
                <div className={"shrink-0"}>
                    <Dropdown>
                        <DropdownTrigger>
                            {(props) => (
                                <MenuDotsButton
                                    {...props}
                                />
                            )}
                        </DropdownTrigger>
                    </Dropdown>
                </div>

            </div>
        </Card>
    );
};

export default InboxCard;