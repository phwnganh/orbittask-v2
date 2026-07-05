import {useState} from 'react';
import Textarea from "@/shared/components/inputs/Textarea.tsx";
import Button from "@/shared/components/button/Button.tsx";
import CommentActivityActions
    from "@/features/task-detail/components/task-detail-activity/task-activity-content/comment-activity/CommentActivityActions.tsx";

type CommentActivityProps = {
    content: string;
}
const CommentActivity = ({content}: CommentActivityProps) => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(content)
    return (
        <div className={"mt-2 group relative rounded-md border border-border-primary bg-bg-secondary px-3 py-2 transition"}>
            {editing ? (
                <>
                    <Textarea value={value} onChange={e => setValue(e.target.value)}
                    autoFocus variant="inline"
                              rows={1}
                              className="min-h-5 text-sm leading-5"/>

                    <div className="mt-2 flex gap-2 justify-end">
                        <Button type={"button"} variant={"secondary"} fullWidth={false}
                                size={"sm"}
                            onClick={() => {
                                setValue(content);
                                setEditing(false);
                            }}
                        >
                            Cancel
                        </Button>

                        <Button type={"button"} fullWidth={false} size={"sm"}>
                            Save
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <p
                        onClick={() => setEditing(true)}
                        className="m-0 whitespace-pre-wrap cursor-text"
                    >
                        {content}
                    </p>
                    <CommentActivityActions onEdit={() => setEditing(true)} onDelete={() => {}}/>
                </>
    )}
        </div>
    );
};

export default CommentActivity;