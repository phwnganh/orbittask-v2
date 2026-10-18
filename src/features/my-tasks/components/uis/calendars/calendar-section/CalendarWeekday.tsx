import {WEEK_DAYS} from "@/features/my-tasks/constants/week.constant.ts";

const CalendarWeekday = () => {
    return (
        <div className={"mb-2 grid w-full min-w-0 grid-cols-7 gap-1 sm:gap-2"}>
            {WEEK_DAYS.map((day) => (
                <div
                    key={day}
                    className={
                        "min-w-0 truncate text-xs uppercase text-text-muted font-medium px-2 py-1"
                    }
                >
                    {day}
                </div>
            ))}
        </div>
    );
};

export default CalendarWeekday;