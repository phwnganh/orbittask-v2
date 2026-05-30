import {WEEK_DAYS} from "@/features/my-tasks/constants/week.constant.ts";

const CalendarWeekday = () => {
    return (
        <div className={"grid grid-cols-7 gap-2 mb-2"}>
            {WEEK_DAYS.map((day) => (
                <div
                    key={day}
                    className={
                        "text-xs uppercase text-text-muted font-medium px-2 py-1"
                    }
                >
                    {day}
                </div>
            ))}
        </div>
    );
};

export default CalendarWeekday;