import {type ReactNode, useEffect, useState} from "react";
import SuccessIcon from '@/assets/icons/success-icon.svg?react'
import ErrorIcon from '@/assets/icons/error-icon.svg?react'
import WarningIcon from '@/assets/icons/warning-icon.svg?react'
import InfoIcon from '@/assets/icons/info-icon.svg?react'
import CloseIcon from '@/assets/icons/close-icon.svg?react'
type AlertProps = {
    children?: ReactNode;
    variant: "success" | "error" | "warning" | "info";
    title: string;
    message: string;
    className?: string;
    onClose?: () => void;
    autoClose?: boolean;
    duration?: number;
}
const Alert = ({children, title, message, variant, className, onClose, autoClose = false, duration = 3000}: AlertProps) => {
    const [visible, setVisible] = useState(false)

    const handleClose = () => {
        setVisible(false)
        setTimeout(() => {
            onClose?.()
        }, 200)
    }
    useEffect(() => {
        setVisible(true)

        if(autoClose){
            const timer = setTimeout(() => {
                handleClose()
            }, duration)

            return () => clearTimeout(timer)
        }
    }, []);

    const baseClass = "flex items-start gap-3 w-full p-4 rounded-xl border backdrop-blur-sm transition-all duration-300";
    const variants = {
        success: "text-success bg-bg-success border-border-success",
        error: "text-error bg-bg-error border-border-error",
        warning: "text-warning bg-bg-warning border-border-warning",
        info: "text-info bg-bg-info border-border-info",
    }

    const iconMap = {
        success: <SuccessIcon className="h-5 w-5" />,
        error: <ErrorIcon className={"w-5 h-5"}/>,
        warning: <WarningIcon className={"w-5 h-5"}/>,
        info: <InfoIcon className={"w-5 h-5"}/>,
    };

    return (
        <div className={`${baseClass} ${variants[variant]} ${className} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
            <div className={"text-lg mt-0.5"}>
                {iconMap[variant]}
            </div>

            <div className={"flex-1"}>
                {title && (
                    <p className={"font-semibold text-text-primary"}>{title}</p>
                )}
                {message && (
                    <p className={"text-sm text-text-secondary"}>{message}</p>
                )}
                {children}
            </div>

            <button type={"button"} onClick={handleClose} className={"text-text-muted hover:text-text-primary transition"}>
                <CloseIcon className="h-5 w-5" />
            </button>
        </div>
    );
};

export default Alert;