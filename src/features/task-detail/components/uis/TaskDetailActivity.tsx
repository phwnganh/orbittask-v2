import TaskCommentInput from "@/features/task-detail/components/task-detail-activity/task-comment-input/TaskCommentInput.tsx";
import TaskActivityList from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityList.tsx";
import type { Task } from "@/features/task/types/task.type.ts";
import Tabs from "@/shared/components/tabs/Tabs";
import TabsList from "@/shared/components/tabs/TabsList";
import TabsTrigger from "@/shared/components/tabs/TabsTrigger";
import TabsContent from "@/shared/components/tabs/TabsContent";
import TaskActivityCommentList from "@/features/task-detail/components/task-detail-activity/task-activity-comment/TaskActivityCommentList.tsx";
import type { CommentWithReplies } from "../../types/comment.type";
import { useState } from "react";
import type { Profile } from "@/features/auth/types/auth.type";

type TaskDetailActivityProps = {
  task: Task;
  me?: Profile | null;
};
const TaskDetailActivity = ({ task, me }: TaskDetailActivityProps) => {
  const [replyingTo, setReplyingTo] = useState<CommentWithReplies | null>(null);

  const handleReply = (comment: CommentWithReplies) => {
    setReplyingTo(comment);
  };
  return (
    <div className={"flex flex-col h-full min-h-0"}>
      <h3 className={"font-semibold mb-4 shrink-0"}>Activity</h3>

      <Tabs defaultValue="comments" className="flex flex-col flex-1 min-h-0">
        <TabsList className="self-start shrink-0">
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <div className="mt-4 px-2 flex-1 min-h-0 overflow-y-auto scrollbar-custom">
          <TabsContent value="comments" className="min-h-full">
            <TaskCommentInput
              task={task}
              replyingTo={replyingTo}
              onReplyComment={() => setReplyingTo(null)}
            />
            <div className="mt-4">
              <TaskActivityCommentList task={task} onReply={handleReply} me={me} />
            </div>
          </TabsContent>
          <TabsContent value="history">
            <TaskActivityList task={task} me={me} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TaskDetailActivity;
