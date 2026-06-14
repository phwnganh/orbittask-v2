import {addMonths, format, subMonths} from "date-fns";
import type {Dispatch, SetStateAction} from "react";
import ChevronIcon from '@/assets/icons/chevron-right-icon.svg?react'
import Button from "@/shared/components/button/Button.tsx";
type CalendarHeaderProps = {
    currentMonth: Date;
    setCurrentMonth: Dispatch<SetStateAction<Date>>;
}
const CalendarHeader = ({currentMonth, setCurrentMonth}: CalendarHeaderProps) => {
    return (
        <div className={"flex items-center justify-between mb-6"}>
            <Button type={"button"} fullWidth={false} variant={"secondary"}
                onClick={() => setCurrentMonth((prev) => subMonths(prev, 1))}
            >
                <ChevronIcon className={"w-6 h-6 shrink-0 rotate-180"}/>
            </Button>
            <h2 className={"font-semibold text-lg"}>
                {format(currentMonth, "MMMM yyyy")}
            </h2>
            <Button type={"button"} fullWidth={false} variant={"secondary"}
                onClick={() => setCurrentMonth((prev) => addMonths(prev, 1))}
                className={"p-2 rounded-xl hover:bg-bg-tertiary transition"}
            >
                <ChevronIcon className={"w-6 h-6 shrink-0"}/>
            </Button>
        </div>
    );
};

export default CalendarHeader;