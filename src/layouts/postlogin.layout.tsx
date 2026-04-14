import ProtectedRoute from "@/routes/protected.route.tsx";
import {Outlet} from "react-router-dom";
import Sidebar from "@/layouts/components/sidebar/Sidebar.tsx";
import Header from "@/layouts/components/header/Header.tsx";
import {useSidebarStore} from "@/layouts/stores/sidebar.store.ts";

const PostLoginLayout = () => {
    const {desktopCollapsed} = useSidebarStore()
    return (
        <ProtectedRoute>
            <div className="flex h-screen bg-bg-primary">
                <Sidebar/>
                <div
                    className={`
                        flex flex-col flex-1 transition-all duration-300
                        ${desktopCollapsed ? "lg:ml-20" : "lg:ml-65"}
                    `}
                >
                    <Header/>
                    <main className="flex-1 overflow-auto">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default PostLoginLayout;