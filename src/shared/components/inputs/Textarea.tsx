import type {TextareaHTMLAttributes} from "react";

type TextareaProps = {
    className?: string;
    variant?: "default" | "inline";
} & TextareaHTMLAttributes<HTMLTextAreaElement>
const Textarea = ({className, variant = "default", ...props}: TextareaProps) => {
    const baseClass = `w-full bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none transition`
    const variants = {
        default: `px-3 py-2 rounded-md border border-border-primary focus:border-primary`,
        inline: `p-0 border-none rounded-none resize-none focus:ring-0`
    }
    return (
        <textarea className={`${baseClass} ${variants[variant]} ${className}`} {...props}/>
    );
};

export default Textarea;