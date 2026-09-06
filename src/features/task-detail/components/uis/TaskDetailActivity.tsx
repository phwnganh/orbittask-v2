import TaskCommentInput from "@/features/task-detail/components/task-detail-activity/task-comment-input/TaskCommentInput.tsx";
import TaskActivityList from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityList.tsx";
import type { Task } from "@/features/task/types/task.type.ts";
import Tabs from "@/shared/components/tabs/Tabs";
import TabsList from "@/shared/components/tabs/TabsList";
import TabsTrigger from "@/shared/components/tabs/TabsTrigger";
import TabsContent from "@/shared/components/tabs/TabsContent";
import TaskActivityCommentList
  from "@/features/task-detail/components/task-detail-activity/task-activity-comment/TaskActivityCommentList.tsx";

type TaskDetailActivityProps = {
  task: Task;
};
const TaskDetailActivity = ({ task }: TaskDetailActivityProps) => {
  return (
    <div className={"flex flex-col h-full min-h-0"}>
      <h3 className={"font-semibold mb-4"}>Activity</h3>

      <Tabs defaultValue="comments">
        <TabsList className="self-start">
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <div className="mt-4 flex-1 min-h-0 overflow-y-auto scrollbar-custom">
          <TabsContent value="comments">
            <TaskCommentInput task={task} />
            <div className="mt-4">
              <TaskActivityCommentList task={task}/>
            </div>
          </TabsContent>
          <TabsContent value="history">
            <TaskActivityList task={task} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TaskDetailActivity;
