import InboxHeaderSection from "@/features/inbox/components/sections/InboxHeaderSection.tsx";
import InboxCardsSection from "@/features/inbox/components/sections/InboxCardsSection.tsx";
import {useViewInbox} from "@/features/inbox/hooks/useViewInbox.ts";
import InboxFiltersSection from "@/features/inbox/components/sections/InboxFiltersSection.tsx";

const InboxPage = () => {
    const {data: inboxes, isLoading} = useViewInbox()
    return (
        <div className={"flex flex-col gap-4 sm:gap-6 h-full min-h-0"}>
            <InboxHeaderSection/>
            <InboxFiltersSection/>
            <div className={"flex-1 min-h-0 overflow-y-auto p-1 sm:p-2 scrollbar-custom"}>
                <InboxCardsSection inboxes={inboxes ?? []} isLoading={isLoading}/>
            </div>
        </div>
    );
};

export default InboxPage;