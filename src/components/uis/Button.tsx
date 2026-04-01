import type {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>
const Button = ({children, variant = "primary", className, ...props}: ButtonProps) => {
    const baseClass = "w-full px-4 py-2.5 rounded-md font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-primary text-text-primary hover:bg-primary-hover active:bg-primary-active",
        secondary: "bg-bg-secondary text-text-secondary hover:bg-secondary-hover",
    }
    return (
        <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;