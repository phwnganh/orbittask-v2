import type {HTMLAttributes} from "react";
import {useTabs} from "@/shared/components/tabs/Tabs.tsx";

type TabsContentProps = {
    value: string;
    className?: string;
} & HTMLAttributes<HTMLDivElement>
const TabsContent = ({value, className, children, ...props}: TabsContentProps) => {
    const {value: activeTab} = useTabs()

    if(activeTab !== value) {
        return null;
    }
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};

export default TabsContent;