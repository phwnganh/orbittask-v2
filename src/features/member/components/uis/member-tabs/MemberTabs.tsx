import Tabs from "@/shared/components/tabs/Tabs.tsx";
import TabsTrigger from "@/shared/components/tabs/TabsTrigger.tsx";
import TabsList from "@/shared/components/tabs/TabsList.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import TabsContent from "@/shared/components/tabs/TabsContent.tsx";
import MemberList from "@/features/member/components/uis/member-list/MemberList.tsx";
import Button from "@/shared/components/button/Button.tsx";

type MemberTabsProps = {
    members?: Member[];
    pendingUsers?: Member[];
}
const MemberTabs = ({members, pendingUsers}: MemberTabsProps) => {
    return (
        <Tabs defaultValue={"member"}>
            <TabsList>
                <TabsTrigger value={"member"}>Members</TabsTrigger>
                <TabsTrigger value={"pending"}>Pending</TabsTrigger>
            </TabsList>

            <TabsContent className={"mt-3"} value={"member"}>
                <p className={"text-sm text-text-secondary mb-3"}>{members?.length} team members</p>
                <MemberList users={members} renderAction={user => (
                    <Button variant={"secondary"} fullWidth={false} size={"md"}>Remove</Button>
                )}/>
            </TabsContent>

            <TabsContent className={"mt-3"} value={"pending"}>
                <p className={"text-sm text-text-secondary mb-3"}>{pendingUsers?.length} members have been invited</p>
                <MemberList users={pendingUsers} renderAction={pendingUsers => (
                    <div className={"flex items-center gap-3"}>
                        <Button variant={"secondary"} fullWidth={false} size={"md"}>Resend</Button>
                        <Button variant={"secondary"} fullWidth={false} size={"md"}>Revoke</Button>
                    </div>
                )}/>
            </TabsContent>
        </Tabs>
    );
};

export default MemberTabs;