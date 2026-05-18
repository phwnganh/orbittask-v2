
type TaskColumnHeaderProps = {
    status: string
}
const TaskColumnHeader = ({status}: TaskColumnHeaderProps) => {
    return (
        <div className={"flex items-center justify-between"}>
            <h1>{status}</h1>
        </div>
    );
};

export default TaskColumnHeader;