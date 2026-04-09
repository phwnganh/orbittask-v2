import type {SidebarItem} from "@/layouts/types/sidebar.type.ts";
import DashboardIcon from '@/assets/icons/dashboard-icon.svg?react';
import InboxIcon from '@/assets/icons/inbox-icon.svg?react';
import TasksIcon from '@/assets/icons/tasks-icon.svg?react';
import ProjectsIcon from '@/assets/icons/projects-icon.svg?react';
import LabelsIcon from '@/assets/icons/labels-icon.svg?react';
import {DASHBOARD, INBOX, LABELS, MY_TASKS, PROJECTS} from "@/shared/constants/route.constant.ts";
export const SIDEBAR: SidebarItem[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: DashboardIcon,
        path: DASHBOARD
    },
    {
        key: "inbox",
        label: "Inbox",
        icon: InboxIcon,
        path: INBOX
    },
    {
        key: "tasks",
        label: "My Tasks",
        icon: TasksIcon,
        path: MY_TASKS
    },
    {
        key: "projects",
        label: "Projects",
        icon: ProjectsIcon,
        path: PROJECTS
    },
    {
        key: "labels",
        label: "Labels",
        icon: LabelsIcon,
        path: LABELS
    }
]