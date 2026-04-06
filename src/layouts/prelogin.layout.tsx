import {Outlet} from "react-router-dom";
import PublicRoute from "@/routes/public.route.tsx";

const PreLoginLayout = () => {
    return (
        <PublicRoute>
            <div className={"flex justify-center items-center min-h-screen bg-bg-primary"}>
                <div className={"max-w-md w-full flex flex-col gap-6 border border-border-primary p-6 rounded-xl shadow-lg"}>
                    <Outlet/>
                </div>
            </div>
        </PublicRoute>

    );
};

export default PreLoginLayout;