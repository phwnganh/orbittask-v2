import MyTaskTitleSection from "@/features/my-tasks/components/sections/MyTaskTitleSection.tsx";
import MyTaskMainSection from "@/features/my-tasks/components/sections/MyTaskMainSection.tsx";

const MyTasksPage = () => {
    return (
        <div className={"flex flex-col gap-6 h-full"}>
            <MyTaskTitleSection/>
            <MyTaskMainSection/>
        </div>
    );
};

export default MyTasksPage;