import {Link} from "react-router-dom";
import {PROJECTS} from "@/shared/constants/route.constant.ts";

const projects = [
    { id: 1, name: "Project A1" },
    { id: 2, name: "Project A2" },
    { id: 3, name: "Project A3" },
    { id: 4, name: "Project A4" },
    { id: 5, name: "Project A5" },
];

const SidebarProjectList = () => {
    return (
        <div className={"ml-6 mt-1 flex flex-col gap-1"}>
            { projects.map((project) => (
                <Link key={project.id} to={`/app/project/${project.id}`}
                className={"group flex items-center gap-2 text-sm px-2 py-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition"}>
                    <span className={"w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-text-primary transition"}></span>
                    <span className={"truncate"}>{project.name}</span>
                </Link>
            ))
            }
        </div>
    );
};

export default SidebarProjectList;