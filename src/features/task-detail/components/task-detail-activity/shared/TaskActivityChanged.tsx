import ArrowRight from '@/assets/icons/arrow-right-icon.svg?react'
import type {ReactNode} from "react";
type TaskActivityChangeProps = {
    label: string;
    from: ReactNode;
    to: ReactNode;
    direction?: "horizontal" | "vertical";
}
const TaskActivityChanged = ({label, from, to, direction = "horizontal"}: TaskActivityChangeProps) => {
    return (
        <div className={"space-y-2"}>
            <p className={"text-sm text-text-secondary"}>{label}</p>

            <div className={direction === "horizontal"
                ? "flex items-center gap-3"
                : "flex flex-col gap-2"}>
                {from}

             <ArrowRight className={"w-3 h-3 shrink-0 text-text-primary"}/>

                {to}
            </div>
        </div>
    );
};

export default TaskActivityChanged;