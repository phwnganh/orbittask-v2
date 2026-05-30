import type {MyTaskStatus} from "@/features/my-tasks/types/my-task.type.ts";

type MyTaskStatisticProps = {
    statistics?: MyTaskStatus
}
const MyTaskStatistic = ({statistics}: MyTaskStatisticProps) => {
    return (
        <div className={"flex items-center gap-4 rounded-xl border border-border-primary bg-bg-secondary px-4 py-3"}>
            <div className={"flex items-center gap-2"}>
                <div className={"w-2 h-2 shrink-0 rounded-full bg-error"}/>
                <span className={"text-sm text-text-primary"}>
                    {statistics?.overdue_tasks} overdue
                </span>
            </div>
            <div className={"w-px h-4 bg-border-primary"} />

            <div className={"flex items-center gap-2"}>
                <div className={"w-2 h-2 rounded-full bg-warning"} />
                <span className={"text-sm text-text-primary"}>
                    {statistics?.today_tasks} due today
                </span>
            </div>
        </div>
    );
};

export default MyTaskStatistic;