import EmptyState from "@/shared/components/feedback/EmptyState.tsx";

const MyTaskEmpty = () => {
    return (
        <EmptyState title={"No tasks scheduled"} description={"You've all caught up!"}/>
    );
};

export default MyTaskEmpty;