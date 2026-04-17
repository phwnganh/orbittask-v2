import {type HTMLAttributes} from "react";
import UserIcon from '@/assets/icons/user-icon.svg?react'
type AvatarProps = {
    avatarUrl?: string;
    name?: string;
    size?: "xs" | "sm" | "md" | "lg";
} & HTMLAttributes<HTMLDivElement>;
const Avatar = ({avatarUrl, name, size="sm", className, ...props}: AvatarProps) => {
    const sizeClass = {
        xs: "w-6 h-6 text-[10px]",
        sm: "w-7 h-7 text-xs",
        md: "w-9 h-9 text-sm",
        lg: "w-11 h-11 text-base"
    }
    return (
        <div className={`flex justify-center items-center shrink-0 rounded-full overflow-hidden bg-bg-tertiary border border-border-primary ${sizeClass[size]} ${className}`} {...props}>
            {avatarUrl ?
                <img src={avatarUrl} alt={"avatar"} className={"w-full h-full object-cover"}/> :
                <UserIcon className={`text-text-muted ${sizeClass[size]}`}/>
            }

        </div>
    );
};

export default Avatar;