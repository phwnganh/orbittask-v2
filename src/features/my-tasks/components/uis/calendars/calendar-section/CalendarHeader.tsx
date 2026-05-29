import {addMonths, format, subMonths} from "date-fns";
import type {Dispatch, SetStateAction} from "react";

type CalendarHeaderProps = {
    currentMonth: Date;
    setCurrentMonth: Dispatch<SetStateAction<Date>>;
}
const CalendarHeader = ({currentMonth, setCurrentMonth}: CalendarHeaderProps) => {
    return (
        <div className={"flex items-center justify-between mb-6"}>
            <button
                onClick={() => setCurrentMonth((prev) => subMonths(prev, 1))}
                className={"p-2 rounded-xl hover:bg-bg-tertiary transition"}
            >
                chevron left
            </button>
            <h2 className={"font-semibold text-lg"}>
                {format(currentMonth, "MMMM yyyy")}
            </h2>
            <button
                onClick={() => setCurrentMonth((prev) => addMonths(prev, 1))}
                className={"p-2 rounded-xl hover:bg-bg-tertiary transition"}
            >
                chevron right
            </button>
        </div>
    );
};

export default CalendarHeader;