
const LoadingSpin = () => {
    return (
        <div className={"min-h-screen flex justify-center items-center bg-bg-primary"}>
            <div className={"relative h-10 w-10"}>
                <div className={"absolute inset-0 rounded-full border-2 border-border-primary/40"}/>
                <div className={"absolute inset-0 rounded-full border-2 border-t-primary animate-spin"}/>
            </div>
        </div>
    );
};

export default LoadingSpin;