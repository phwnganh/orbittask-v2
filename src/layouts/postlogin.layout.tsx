import ProtectedRoute from "@/routes/protected.route.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "@/layouts/components/sidebar/Sidebar.tsx";
import Header from "@/layouts/components/header/Header.tsx";
import {useProfile} from "@/features/profile/hooks/useProfile.ts";

const PostLoginLayout = () => {
  const {data: profile} = useProfile()

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-bg-primary overflow-hidden">
        <Sidebar profile={profile ?? undefined}/>
        <div className={`flex flex-col flex-1`}>
          <Header profile={profile ?? undefined}/>
          <main className="flex-1 min-h-0 overflow-hidden p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PostLoginLayout;
