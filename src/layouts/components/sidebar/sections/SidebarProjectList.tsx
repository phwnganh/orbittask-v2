import {NavLink} from "react-router-dom";
import { PROJECT_DETAILS } from "@/shared/constants/route.constant.ts";
import {useViewPinnedProjects} from "@/features/project/hooks/useViewProjects.ts";


const SidebarProjectList = () => {
  const {data: projects} = useViewPinnedProjects()
  return (
    <div className={"ml-6 mt-1 flex flex-col gap-1"}>
      {projects?.map((project) => (
        <NavLink
          key={project.project.id}
          to={`${PROJECT_DETAILS}/${project.project.id}`}
          className={({ isActive }) =>
              `group flex justify-between text-sm px-2 py-1.5 rounded-md transition ${
                  isActive
                      ? "text-text-primary bg-bg-tertiary"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-tertiary"
              }`
          }
        >
          {({isActive}) => (
              <div className={"flex items-center gap-2"}>
                      <span
                          className={
                            `w-1.5 h-1.5 rounded-full bg-text-muted group-hover:bg-text-primary transition
                            ${isActive ? "bg-text-primary" : "bg-text-muted group-hover:bg-text-primary"}`
                          }
                      ></span>
                <span className={"truncate"}>{project.project.title}</span>
              </div>
          )}


        </NavLink>
      ))}
    </div>
  );
};

export default SidebarProjectList;
