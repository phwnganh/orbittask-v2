import {Route, Routes} from "react-router-dom";
import {
    DASHBOARD,
    FORBIDDEN,
    LOGIN,
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
                <Route path={"/"} element={<DashboardPage/>} index/>
            </Route>
        </Routes>
    );
};

export default AppRoute;