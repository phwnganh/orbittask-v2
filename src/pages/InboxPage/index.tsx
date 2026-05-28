import InboxHeaderSection from "@/features/inbox/components/sections/InboxHeaderSection.tsx";
import InboxCardsSection from "@/features/inbox/components/sections/InboxCardsSection.tsx";

const InboxPage = () => {
    return (
        <div className={"flex flex-col gap-6 h-full"}>
            <InboxHeaderSection/>
            <div className={"flex-1 min-h-0 overflow-y-auto p-2 scrollbar-custom"}>
                <InboxCardsSection/>
            </div>
        </div>
    );
};

export default InboxPage;