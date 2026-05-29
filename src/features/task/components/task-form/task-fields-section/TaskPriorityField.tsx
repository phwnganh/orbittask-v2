import {type Control, Controller, type FieldValues, type Path} from "react-hook-form";
import {TASK_PRIORITIES} from "@/features/task/constants/task-priority.constant.ts";
import SingleSelect from "@/shared/components/inputs/base-select/single-select/SingleSelect.tsx";
import Badge from "@/shared/components/data-display/Badge.tsx";

type TaskPriorityFieldProps<T extends FieldValues> = {
    control: Control<T>;
}
const TaskPriorityField = <T extends FieldValues>({control}: TaskPriorityFieldProps<T>) => {
    return (
        <div className={"flex flex-col gap-1.5"}>
            <label className={"text-sm text-secondary font-medium"}>Priority</label>
            <Controller control={control} render={({field}) => {
                const selectedPriority = TASK_PRIORITIES.find(priority => priority.value === field.value) ?? null;

                return (
                    <SingleSelect value={selectedPriority} items={[...TASK_PRIORITIES]} onChange={priority => {
                        field.onChange(priority?.value ?? "")
                    }} getKey={priority => priority.value} renderItem={(priority) => (
                        <div className={"flex items-center gap-3"}>
                            <Badge size={"sm"} variant={priority.variant}>{priority.label}</Badge>
                        </div>
                    )} renderValue={(priority) => {
                        if(!priority) return null;
                        return (
                            <Badge size={"sm"} variant={priority.variant}>{priority.label}</Badge>
                        )
                    }} placeholder={"Select priority"}/>
                )
            }} name={"priority" as Path<T>}/>
        </div>
    );
};

export default TaskPriorityField;