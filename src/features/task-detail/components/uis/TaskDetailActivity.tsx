import TaskCommentInput from "@/features/task-detail/components/task-detail-activity/task-comment-input/TaskCommentInput.tsx";
import TaskActivityList from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityList.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskDetailActivityProps = {
    task: Task;
}
const TaskDetailActivity = ({task}: TaskDetailActivityProps) => {
    return (
        <div className={"flex flex-col h-full min-h-0"}>
            <h3 className={"font-semibold mb-4"}>Activity</h3>
            <TaskCommentInput task={task}/>
            <div className={"mt-4 flex-1 min-h-0 overflow-y-auto scrollbar-custom"}>
                <TaskActivityList task={task}/>
            </div>
        </div>
    );
};

export default TaskDetailActivity;