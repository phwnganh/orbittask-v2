import type {ComponentProps} from 'react'
import { DayPicker as ReactDayPicker } from "react-day-picker";
type DatePickerProps = ComponentProps<typeof ReactDayPicker> & {
    className?: string
}
const DatePicker = ({className, ...props}: DatePickerProps) => {
    return (
        <div className={`daypicker-wrapper rounded-2xl border border-border-primary bg-bg-secondary p-3 ${className}`}>
            <ReactDayPicker showOutsideDays fixedWeeks {...props} />
        </div>
    );
};

export default DatePicker;