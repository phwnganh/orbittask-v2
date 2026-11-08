import {type Control, Controller, type FieldErrors, type FieldValues, type Path} from "react-hook-form";
import DatePicker from "@/shared/components/day-picker/DatePicker.tsx";
import {format, isToday, startOfDay} from "date-fns";
import Button from "@/shared/components/button/Button.tsx";
import CalendarIcon from '@/assets/icons/calendar-icon.svg?react'
import Dropdown from "@/shared/components/dropdown/Dropdown.tsx";
import DropdownTrigger from "@/shared/components/dropdown/DropdownTrigger.tsx";
import DropdownContent from "@/shared/components/dropdown/DropdownContent.tsx";
import {useState} from "react";

type TaskDueDateFieldProps<T extends FieldValues> = {
    control: Control<T>;
    errors: FieldErrors<T>;
}
const TaskDueDateField = <T extends FieldValues>({control, errors}: TaskDueDateFieldProps<T>) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={"flex flex-col gap-1.5"}>
            <div className={"flex items-center gap-5"}>
                <label className={"text-sm text-secondary font-medium"}>Due Date:</label>
                <Controller control={control} render={({field}) => {
                    const displayDate = field.value ? isToday(field.value) ? "Today" : format(field.value, "MMM dd, yyyy") : "Select due date";

                    return (
                        <Dropdown placement={"top-start"} open={open} onOpenChange={setOpen}>
                            <DropdownTrigger>
                                {(props) => (
                                    <Button type={"button"} fullWidth={false} variant={"ghost"} {...props}
                                    >
                                        <div className={"flex justify-center items-center w-4 h-4 shrink-0"}>
                                            <CalendarIcon width="16" height="16" className={"text-text-primary"}/>
                                        </div>
                                        <span className={"text-text-primary text-sm"}>{displayDate}</span>
                                    </Button>
                                )}

                            </DropdownTrigger>

                            <DropdownContent>
                                <DatePicker mode={"single"} selected={field.value} onSelect={field.onChange} disabled={{
                                    before: startOfDay(new Date())
                                }}/>
                            </DropdownContent>
                        </Dropdown>
                    )
                }} name={"due_date" as Path<T>}/>
            </div>
            {errors.due_date && (
                <span className={"text-xs text-error"}>
                    {String(errors.due_date.message)}
                </span>
            )}
        </div>

    );
};

export default TaskDueDateField;