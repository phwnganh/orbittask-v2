import TaskCard from "@/features/task/components/task-card/TaskCard.tsx";


const TaskColumnList = () => {
    return (
        <div className={"flex flex-col gap-2 p-2"}>
            <TaskCard/>
        </div>
    );
};

export default TaskColumnList;