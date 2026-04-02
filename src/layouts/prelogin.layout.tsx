import {Outlet} from "react-router-dom";

const PreLoginLayout = () => {
    return (
        <div className={"flex justify-center items-center min-h-screen bg-bg-primary"}>
            <div className={"max-w-md w-full flex flex-col gap-6 border border-border-primary p-6 rounded-xl shadow-lg"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PreLoginLayout;