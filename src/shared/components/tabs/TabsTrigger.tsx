import {type ButtonHTMLAttributes, forwardRef} from "react";
import {useTabs} from "@/shared/components/tabs/Tabs.tsx";

type TabsTriggerProps = {
    value: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const TabsTrigger = forwardRef<
    HTMLButtonElement,
    TabsTriggerProps
>(
    (
        {
            value,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const {value: activeTab, onChange} = useTabs();

        const isActive = activeTab === value;

        const baseClass =
            "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200";

        const activeClass =
            "bg-primary text-text-primary shadow-sm";

        const inactiveClass =
            "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary";

        return (
            <button
                ref={ref}
                onClick={() => onChange(value)}
                className={`
                    ${baseClass}
                    ${isActive ? activeClass : inactiveClass}
                    ${className ?? ""}
                `}
                {...props}
            >
                {children}
            </button>
        );
    }
);

TabsTrigger.displayName = "TabsTrigger";

export default TabsTrigger;