import ProtectedRoute from "@/routes/protected.route.tsx";
import {Outlet} from "react-router-dom";

const PostLoginLayout = () => {
    return (
        <ProtectedRoute>
                <Outlet/>
        </ProtectedRoute>
    );
};

export default PostLoginLayout;