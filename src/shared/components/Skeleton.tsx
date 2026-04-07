
const Skeleton = () => {
    return (
        <div className={"min-h-screen flex items-center justify-center bg-bg-primary"}>
            <div className={"w-100 p-6 rounded-2xl bg-gray-800 animate-pulse space-y-4"}>
                <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                <div className="h-10 bg-gray-700 rounded"></div>
                <div className="h-10 bg-gray-700 rounded"></div>
                <div className="h-10 bg-gray-700 rounded"></div>
            </div>
        </div>
    );
};

export default Skeleton;