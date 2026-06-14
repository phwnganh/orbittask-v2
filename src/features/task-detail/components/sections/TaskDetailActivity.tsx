import TaskCommentInput from "@/features/task-detail/components/task-detail-activity/TaskCommentInput.tsx";
import TaskActivityList from "@/features/task-detail/components/task-detail-activity/TaskActivityList.tsx";

const TaskDetailActivity = () => {
    return (
        <div className={"flex flex-col h-full"}>
            <h3 className={"font-semibold mb-4"}>Activity</h3>
            <TaskCommentInput/>
            <div className={"mt-4 border-t border-border-primary pt-4 flex-1 overflow-y-auto scrollbar-custom"}>
                <TaskActivityList/>
            </div>
        </div>
    );
};

export default TaskDetailActivity;