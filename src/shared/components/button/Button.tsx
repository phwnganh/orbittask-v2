import {type ButtonHTMLAttributes, forwardRef, type ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "dashed";
    size?: "sm" | "md" | "lg" | "icon";
    fullWidth?: boolean;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, variant = "primary", size = "md", fullWidth = true, className, ...props}, ref) => {
    const baseClass = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2.5 text-sm",
        lg: "px-5 py-3 text-base",
        icon: "w-4 h-4"
    }

    const variants = {
        primary: "bg-primary text-text-primary hover:bg-primary-hover focus:ring-primary",
        secondary: "bg-bg-secondary text-text-secondary border border-border-primary hover:bg-secondary-hover focus:ring-bg-secondary",
        tertiary: "bg-bg-elevated text-text-secondary hover:bg-elevated-hover focus:ring-bg-elevated",
        ghost: "bg-transparent text-text-secondary hover:bg-bg-tertiary hover:text-text-primary",
        danger: "bg-error text-text-primary hover:opacity-90",
        dashed: "bg-bg-secondary/40 text-text-primary border border-dashed border-border-primary hover:border-border-primary/50 hover:bg-bg-elevated"
    };

    return (
        <button ref={ref} className={`${baseClass} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : "w-auto"} ${className ?? ""}`} {...props}>{children}</button>
    )
})

Button.displayName = "Button"

export default Button;