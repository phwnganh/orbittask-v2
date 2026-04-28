import MenuDotsIcon from '@/assets/icons/menu-dots-icon.svg?react'
import {type ButtonHTMLAttributes, forwardRef} from "react";

type MenuDotsButtonProps = {
    open?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>
const MenuDotsButton = forwardRef<HTMLButtonElement, MenuDotsButtonProps>(({open, className, ...props}, ref) => {
    return (
        <button ref={ref} {...props} type={"button"} className={"hover:bg-bg-elevated bg-bg-tertiary rounded-lg flex justify-center items-center w-5 h-5 shrink-0"}>
            <MenuDotsIcon className={"text-text-primary"}/>
        </button>
    );
});

MenuDotsButton.displayName = "MenuDotsButton";

export default MenuDotsButton;