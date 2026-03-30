import type {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({children, variant = "primary", className, ...props}: ButtonProps) => {
    const baseClass = "px-2 py-4 rounded-lg transition-all duration-200";
    const variants = {
        primary: "bg-primary text-text-primary hover:bg-primary-hover",
        secondary: "bg-bg-secondary text-text-secondary hover:bg-secondary-hover",
    }
    return (
        <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;