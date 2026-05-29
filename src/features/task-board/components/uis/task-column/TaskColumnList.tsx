import TaskCard from "@/features/task/components/uis/task-card/TaskCard.tsx";
import type {Task} from "@/features/task/types/task.type.ts";
import TaskEmpty from "@/features/task/components/uis/states/TaskEmpty.tsx";

type TaskColumnListProps = {
    tasks?: Task[]
}
const TaskColumnList = ({tasks}: TaskColumnListProps) => {
    return (
        <>
            {tasks && tasks.length > 0 ? (
                    <div className={"flex flex-col gap-2 p-2"}>
                        {tasks?.map((task, index) =>
                            <TaskCard key={`${task.id}-${task.status}-${index}`} task={task}/>
                        )}
                    </div>
                ) :
                <div className={"h-full"}>
                    <TaskEmpty/>
                </div>}

        </>

    );
};

export default TaskColumnList;