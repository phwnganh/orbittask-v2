import EmptyState from "@/shared/components/feedback/EmptyState.tsx";

const TaskEmpty = () => {
    return (
        <EmptyState title={"No tasks"} description={"You're all caught up!"}/>
    );
};

export default TaskEmpty;