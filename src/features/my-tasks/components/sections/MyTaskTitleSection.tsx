import type {Dispatch, SetStateAction} from "react";
import Button from "@/shared/components/button/Button.tsx";

type MyTaskTitleSectionProps = {
    setCurrentMonth: Dispatch<SetStateAction<Date>>;
    setCurrentDate: Dispatch<SetStateAction<Date>>;
}
const MyTaskTitleSection = ({setCurrentMonth, setCurrentDate}: MyTaskTitleSectionProps) => {
    const handleClickTodays = () => {
        setCurrentMonth(new Date());
        setCurrentDate(new Date());
    }
    return (
        <div className={"flex items-start justify-between"}>
            <div>
                <h1 className={"font-bold text-2xl text-text-primary"}>My Tasks</h1>
                <p className={"text-sm text-text-secondary"}>Track your workload and deadlines</p>
            </div>
            <Button type={"button"} fullWidth={false} variant={"secondary"} onClick={handleClickTodays}>Today</Button>
        </div>
    );
};

export default MyTaskTitleSection;