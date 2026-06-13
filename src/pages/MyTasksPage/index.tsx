import MyTaskTitleSection from "@/features/my-tasks/components/sections/MyTaskTitleSection.tsx";
import MyTaskMainSection from "@/features/my-tasks/components/sections/MyTaskMainSection.tsx";
import {useState} from "react";

const MyTasksPage = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className={"flex flex-col gap-6 h-full"}>
            <MyTaskTitleSection setCurrentMonth={setCurrentMonth} setCurrentDate={setSelectedDate}/>
            <MyTaskMainSection selectedDate={selectedDate} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} setSelectedDate={setSelectedDate}/>
        </div>
    );
};

export default MyTasksPage;