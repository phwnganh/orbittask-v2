import {Route, Routes} from "react-router-dom";
import {LOGIN, PROJECTS, REGISTER} from "../constants/route.constant.ts";
import LoginPage from "../pages/LoginPage";
import PostloginLayout from "../layouts/postlogin.layout.tsx";
import ProjectsPage from "../pages/ProjectsPage";
import PreLoginLayout from "@/layouts/prelogin.layout.tsx";
import RegisterPage from "@/pages/RegisterPage";

const AppRoute = () => {
    return (
        <Routes>
            <Route element={<PreLoginLayout/>}>
                <Route path={LOGIN} element={<LoginPage/>}/>
                <Route path={REGISTER} element={<RegisterPage/>}/>
            </Route>

            <Route element={<PostloginLayout/>}>
                <Route path={PROJECTS} element={<ProjectsPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoute;