import {Route, Routes} from "react-router-dom";
import {LOGIN, PROJECTS} from "../constants/route.constant.ts";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layouts/main.layout.tsx";
import ProjectsPage from "../pages/ProjectsPage";

const AppRoute = () => {
    return (
        <Routes>
            <Route path={LOGIN} element={<LoginPage/>}/>
            <Route element={<MainLayout/>}>
                <Route path={PROJECTS} element={<ProjectsPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRoute;