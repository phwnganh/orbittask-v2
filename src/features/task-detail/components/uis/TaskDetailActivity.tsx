import TaskCommentInput from "@/features/task-detail/components/task-detail-activity/task-comment-input/TaskCommentInput.tsx";
import TaskActivityList from "@/features/task-detail/components/task-detail-activity/task-activity-list/TaskActivityList.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskDetailActivityProps = {
    task: Task;
}
const TaskDetailActivity = ({task}: TaskDetailActivityProps) => {
    return (
        <div className={"flex flex-col h-full"}>
            <h3 className={"font-semibold mb-4"}>Activity</h3>
            <TaskCommentInput task={task}/>
            <div className={"mt-4 border-t border-border-primary pt-4 flex-1 overflow-y-auto scrollbar-custom"}>
                <TaskActivityList/>
            </div>
        </div>
    );
};

export default TaskDetailActivity;