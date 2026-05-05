import type {InputHTMLAttributes} from "react";

type InputProps = {
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>
const Input = ({className, ...props}: InputProps) => {
    const baseClass = "w-full py-2 px-3 border border-border-primary text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition rounded-md"
    return (
        <input className={`${baseClass} ${className}`} {...props}/>
    );
};

export default Input;