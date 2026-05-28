import TaskCard from "@/features/task/components/task-card/TaskCard.tsx";
import type {Task} from "@/features/task/types/task.type.ts";

type TaskColumnListProps = {
    tasks?: Task[]
}
const TaskColumnList = ({tasks}: TaskColumnListProps) => {
    return (
        <>
            <div className={"flex flex-col gap-2 p-2"}>
                {tasks?.map((task, index) =>
                    <TaskCard key={`${task.id}-${task.status}-${index}`} task={task}/>
                )}
            </div>
        </>

    );
};

export default TaskColumnList;