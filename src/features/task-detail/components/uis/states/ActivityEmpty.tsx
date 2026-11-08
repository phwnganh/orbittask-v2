import EmptyState from "@/shared/components/feedback/EmptyState.tsx";

const ActivityEmpty = () => {
    return (
        <EmptyState title={"No activities"} description={"Changes and updates to this task will appear here."}/>
    );
};

export default ActivityEmpty;