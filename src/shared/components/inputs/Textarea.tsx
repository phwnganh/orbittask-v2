import type {TextareaHTMLAttributes} from "react";

type TextareaProps = {
    className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>
const Textarea = ({className, ...props}: TextareaProps) => {
    const baseClass = `w-full px-3 py-2 rounded-md border border-border-primary bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition`
    return (
        <textarea className={`${baseClass} ${className}`} {...props}/>
    );
};

export default Textarea;