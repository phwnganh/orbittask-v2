import type {FC, SVGProps} from "react";
export type IconType = FC<SVGProps<SVGSVGElement>>;
export type SidebarItem = {
    key: string;
    label: string;
    icon: IconType;
    path?: string;
    children?: SidebarItem[];
}