import EmptyState from "@/shared/components/feedback/EmptyState.tsx";

const CommentEmpty = () => {
    return (
        <EmptyState title={"No comments"} description={"Add a comment to start the conversation."}/>
    );
};

export default CommentEmpty;