import {Route, Routes} from "react-router-dom";
import {
    DASHBOARD,
    FORBIDDEN, INBOX, LABELS,
    LOGIN, MY_TASKS, PROJECT_DETAILS,
    PROJECTS,
    REGISTER,
    SUCCESSFUL_VERIFIED_ACCOUNT,
    VERIFIED_ACCOUNT
} from "@/shared/constants/route.constant.ts";
import LoginPage from "../pages/LoginPage";
import PostLoginLayout from "../layouts/postlogin.layout.tsx";
import ProjectsPage from "../pages/ProjectsPage";
import PreLoginLayout from "@/layouts/prelogin.layout.tsx";
import RegisterPage from "@/pages/RegisterPage";
import VerifiedAccountPage from "@/pages/VerifiedAccountPage";
import SuccessfulVerifiedAccountPage from "@/pages/VerifiedAccountPage/SuccessfulVerifiedAccountPage.tsx";
import ForbiddenPage from "@/pages/NotFoundPage/ForbiddenPage.tsx";
import DashboardPage from "@/pages/DashboardPage";
import InboxPage from "@/pages/InboxPage";
import TasksPage from "@/pages/TasksPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";
import LabelPage from "@/pages/LabelPage";

const AppRoute = () => {
    return (
        <Routes>
            <Route path={FORBIDDEN} element={<ForbiddenPage/>}/>
            <Route element={<PreLoginLayout/>}>
                <Route path={LOGIN} element={<LoginPage/>}/>
                <Route path={REGISTER} element={<RegisterPage/>}/>
                <Route path={VERIFIED_ACCOUNT} element={<VerifiedAccountPage/>}/>
                <Route path={SUCCESSFUL_VERIFIED_ACCOUNT} element={<SuccessfulVerifiedAccountPage/>}/>
            </Route>

            <Route element={<PostLoginLayout/>}>
                <Route path={PROJECTS} element={<ProjectsPage/>}/>
                <Route path={DASHBOARD} element={<DashboardPage/>}/>
                <Route path={INBOX} element={<InboxPage/>}/>
                <Route path={MY_TASKS} element={<TasksPage/>}/>
                <Route path={`${PROJECT_DETAILS}/:project-id`} element={<ProjectDetailPage/>}/>
                <Route path={LABELS} element={<LabelPage/>}/>
                <Route index element={<DashboardPage/>} />
            </Route>
        </Routes>
    );
};

export default AppRoute;