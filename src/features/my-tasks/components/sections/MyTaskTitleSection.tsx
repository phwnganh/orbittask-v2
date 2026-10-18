import type { Dispatch, SetStateAction } from "react";
import Button from "@/shared/components/button/Button.tsx";

type MyTaskTitleSectionProps = {
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};
const MyTaskTitleSection = ({
  setCurrentMonth,
  setCurrentDate,
}: MyTaskTitleSectionProps) => {
  const handleClickTodays = () => {
    setCurrentMonth(new Date());
    setCurrentDate(new Date());
  };
  return (
    <div className={"flex flex-wrap items-start justify-between gap-2"}>
      <div className="min-w-0">
        <h1 className={"font-bold text-2xl text-text-primary"}>My Tasks</h1>
        <p className={"text-sm text-text-secondary"}>
          Track your workload and deadlines
        </p>
      </div>
      <div className="shrink-0">
        <Button
          type={"button"}
          fullWidth={false}
          variant={"secondary"}
          onClick={handleClickTodays}
        >
          Today
        </Button>
      </div>
    </div>
  );
};

export default MyTaskTitleSection;
