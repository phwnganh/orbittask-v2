import MenuDotsIcon from '@/assets/icons/menu-dots-icon.svg?react'
import {type ButtonHTMLAttributes, forwardRef} from "react";

type MenuDotsButtonProps = {
    open?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>
const MenuDotsButton = forwardRef<HTMLButtonElement, MenuDotsButtonProps>(({open, ...props}, ref) => {
    return (
        <button  {...props} ref={ref} type={"button"} className={"hover:bg-bg-elevated bg-bg-tertiary rounded-lg flex justify-center items-center w-8 h-8 shrink-0 overflow-hidden"}>
            <MenuDotsIcon className={"text-text-primary pointer-events-none w-5 h-5"}/>
        </button>
    );
});

MenuDotsButton.displayName = "MenuDotsButton";

export default MenuDotsButton;