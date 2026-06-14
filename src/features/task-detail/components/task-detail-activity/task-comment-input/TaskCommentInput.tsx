import Textarea from "@/shared/components/inputs/Textarea.tsx";
import Button from "@/shared/components/button/Button.tsx";
import {useState} from "react";
import {useAddComment} from "@/features/task-detail/hooks/useAddComment.ts";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskCommentInputProps = {
    task: Task;
}
const TaskCommentInput = ({task}: TaskCommentInputProps) => {
    const [commentInput, setCommentInput] = useState("");
    const {mutate} = useAddComment()
    const handleSubmitComment = () => {
        mutate({
            task_id: task.id,
            content: commentInput.trim(),
        })
        console.log(commentInput)
    }
    return (
        <div className={"space-y-2"}>
            <Textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder={"Write a comment..."} rows={3}/>
            <div className={"flex justify-end"}>
                <Button type={"button"} fullWidth={false} onClick={handleSubmitComment}>Comment</Button>
            </div>
        </div>
    );
};

export default TaskCommentInput;