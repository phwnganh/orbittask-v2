import ProtectedRoute from "@/routes/protected.route.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "@/layouts/components/sidebar/Sidebar.tsx";
import Header from "@/layouts/components/header/Header.tsx";

const PostLoginLayout = () => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-bg-primary overflow-hidden">
        <Sidebar />
        <div className={`flex flex-col flex-1`}>
          <Header />
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PostLoginLayout;
