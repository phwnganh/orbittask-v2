import Badge from "@/shared/components/data-display/Badge.tsx";

const TaskStartDateField = () => {
    return (
        <div className={"flex items-center gap-5"}>
            <label className={"text-sm text-secondary font-medium"}>Start Date:</label>
            <Badge variant="warning">
                Today
            </Badge>
        </div>
    );
};

export default TaskStartDateField;