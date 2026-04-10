import ProtectedRoute from "@/routes/protected.route.tsx";
import {Outlet} from "react-router-dom";
import Sidebar from "@/layouts/components/sidebar/Sidebar.tsx";

const PostLoginLayout = () => {
    return (
        <ProtectedRoute>
            <Sidebar/>
                <Outlet/>
        </ProtectedRoute>
    );
};

export default PostLoginLayout;