import {useState} from 'react';
import Textarea from "@/shared/components/inputs/Textarea.tsx";

type CommentActivityProps = {
    content: string;
}
const CommentActivity = ({content}: CommentActivityProps) => {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(content)
    return (
        <div className={"mt-2 rounded-md border border-border-primary bg-bg-secondary px-3 py-2 transition"}>
            {editing ? (
                <>
                    <Textarea value={value} onChange={e => setValue(e.target.value)}
                    autoFocus variant="inline"
                              rows={1}
                              className="min-h-5 text-sm leading-5"/>

                    <div className="mt-2 flex gap-2 justify-end">
                        <button
                            onClick={() => {
                                setValue(content);
                                setEditing(false);
                            }}
                        >
                            Cancel
                        </button>

                        <button>
                            Save
                        </button>
                    </div>
                </>
            ) : (
                <p
                    onClick={() => setEditing(true)}
                    className="m-0 whitespace-pre-wrap cursor-text"
                >
                    {content}
                </p>
            )}
        </div>
    );
};

export default CommentActivity;