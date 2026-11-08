import EmptyState from "@/shared/components/feedback/EmptyState.tsx";

const UserEmpty = () => {
    return (
        <EmptyState title={"No user available"} description={"Select user you want to invite to this project!"}/>
    );
};

export default UserEmpty;