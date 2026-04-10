import ProtectedRoute from "@/routes/protected.route.tsx";
import {Outlet} from "react-router-dom";
import Sidebar from "@/layouts/components/sidebar/Sidebar.tsx";
import Header from "@/layouts/components/header/Header.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";

const PostLoginLayout = () => {
    const {collapsed} = useSidebarStore()
    return (
        <ProtectedRoute>
            <div className={`grid h-screen transition-all duration-300 ${collapsed ? "grid-cols-[80px_1fr]" : "grid-cols-[260px_1fr]"} grid-rows-[64px_1fr]`}>
                <div className={"row-span-2"}>
                    <Sidebar/>
                </div>
                <div className={"flex items-center"}>
                    <Header/>
                </div>
                <main className={"overflow-auto"}>
                    <Outlet/>
                </main>
            </div>



        </ProtectedRoute>
    );
};

export default PostLoginLayout;