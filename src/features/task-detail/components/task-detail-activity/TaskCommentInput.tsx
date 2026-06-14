import Textarea from "@/shared/components/inputs/Textarea.tsx";
import Button from "@/shared/components/button/Button.tsx";

const TaskCommentInput = () => {
    return (
        <div className={"space-y-2"}>
            <Textarea placeholder={"Write a comment..."} rows={3}/>
            <div className={"flex justify-end"}>
                <Button type={"submit"} fullWidth={false}>Comment</Button>
            </div>
        </div>
    );
};

export default TaskCommentInput;