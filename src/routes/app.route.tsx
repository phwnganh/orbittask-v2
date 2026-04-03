import {Route, Routes} from "react-router-dom";
import {LOGIN, PROJECTS, REGISTER, SUCCESSFUL_VERIFIED_ACCOUNT, VERIFIED_ACCOUNT} from "../constants/route.constant.ts";
import LoginPage from "../pages/LoginPage";
import PostloginLayout from "../layouts/postlogin.layout.tsx";
import ProjectsPage from "../pages/ProjectsPage";
import PreLoginLayout from "@/layouts/prelogin.layout.tsx";
import RegisterPage from "@/pages/RegisterPage";
import VerifiedAccountPage from "@/pages/VerifiedAccountPage";
import SuccessfulVerifiedAccountPage from "@/pages/VerifiedAccountPage/SuccessfulVerifiedAccountPage.tsx";

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<PreLoginLayout/>}>
                <Route path={LOGIN} element={<LoginPage/>}/>
                <Route path={REGISTER} element={<RegisterPage/>}/>
                <Route path={VERIFIED_ACCOUNT} element={<VerifiedAccountPage/>}/>
                <Route path={SUCCESSFUL_VERIFIED_ACCOUNT} element={<SuccessfulVerifiedAccountPage/>}/>
            </Route>

            <Route element={<PostloginLayout/>}>
                <Route path={PROJECTS} element={<ProjectsPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoute;