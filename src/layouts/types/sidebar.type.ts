import type {FC, SVGProps} from "react";
export type IconType = FC<SVGProps<SVGSVGElement>>;
export type Sidebar = {
    key: string;
    label: string;
    icon: IconType;
    path: string;
    children?: Sidebar[];
}