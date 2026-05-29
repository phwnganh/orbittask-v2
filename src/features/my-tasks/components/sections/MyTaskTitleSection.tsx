
const MyTaskTitleSection = () => {
    return (
        <div className={"flex items-start justify-between"}>
            <div>
                <h1 className={"font-bold text-2xl text-text-primary"}>My Tasks</h1>
                <p className={"text-sm text-text-secondary"}>Track your workload and deadlines</p>
            </div>
            <button>Today</button>
        </div>
    );
};

export default MyTaskTitleSection;