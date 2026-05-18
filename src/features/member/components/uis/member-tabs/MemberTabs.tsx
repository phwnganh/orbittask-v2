import Tabs from "@/shared/components/tabs/Tabs.tsx";
import TabsTrigger from "@/shared/components/tabs/TabsTrigger.tsx";
import TabsList from "@/shared/components/tabs/TabsList.tsx";
import type {Member} from "@/features/member/types/member.type.ts";
import TabsContent from "@/shared/components/tabs/TabsContent.tsx";
import MemberList from "@/features/member/components/uis/member-list/MemberList.tsx";
import Button from "@/shared/components/button/Button.tsx";
import MemberEmpty from "@/features/member/components/uis/states/MemberEmpty.tsx";
import MembersSearch from "@/features/member/components/uis/search/MembersSearch.tsx";
import {useRemoveMemberFromProject} from "@/features/member/hooks/useRemoveMemberFromProject.ts";
import {useRevokeInvitation} from "@/features/member/hooks/useRevokeInvitation.ts";

type MemberTabsProps = {
    projectId: string;
    members?: Member[];
    pendingUsers?: Member[];
}
const MemberTabs = ({projectId, members, pendingUsers}: MemberTabsProps) => {
    const {mutate: removeMember} = useRemoveMemberFromProject();
    const {mutate: removePendingUser} = useRevokeInvitation()

    const handleRemoveMemberFromProject = async (project_id: string, member_id: string) => {
        removeMember({
            project_id: project_id,
            member_id: member_id,
        })
    }

    const handleRemovePendingUser = async (project_id: string, user_id: string) => {
        removePendingUser({
            project_id: project_id,
            user_id: user_id,
        })
    }
    return (
        <Tabs defaultValue={"member"}>
            <TabsList>
                <TabsTrigger value={"member"}>Members</TabsTrigger>
                <TabsTrigger value={"pending"}>Pending</TabsTrigger>
            </TabsList>

            <div className={"mt-3"}>
                <MembersSearch/>
            </div>
            <div className={"min-h-48 mt-3"}>
                <TabsContent value={"member"}>
                    {members && members?.length > 0 ? (
                            <div className={"h-48 overflow-y-auto"}>
                                <p className={"text-sm text-text-secondary mb-3"}>{members?.length} members in this project</p>
                                    <MemberList showRole users={members} renderAction={user => (
                                        <>
                                            {user.role !== "owner" &&
                                                <Button variant={"secondary"} fullWidth={false} size={"md"} onClick={() => handleRemoveMemberFromProject(projectId, user.user_id)}>Remove</Button>
                                            }

                                        </>
                                    )}/>
                            </div>
                        ) :
                        <div className={"h-48"}>
                            <MemberEmpty/>
                        </div>

                    }

                </TabsContent>

                <TabsContent value={"pending"}>
                    {pendingUsers && pendingUsers?.length > 0 ? (
                        <div className={"h-48 overflow-y-auto"}>
                            <p className={"text-sm text-text-secondary mb-3"}>{pendingUsers?.length} pending invitations</p>
                                <MemberList users={pendingUsers} renderAction={pendingUsers => (
                                    <>
                                        {pendingUsers.role !== "owner" &&
                                            <div className={"flex items-center gap-3"}>
                                                <Button variant={"secondary"} fullWidth={false} size={"md"}>Resend</Button>
                                                <Button variant={"secondary"} fullWidth={false} size={"md"} onClick={() => handleRemovePendingUser(projectId, pendingUsers.user_id)}>Revoke</Button>
                                            </div>
                                        }
                                    </>
                                )}/>
                        </div>
                    ) : (
                        <div className={"h-48"}>
                            <MemberEmpty/>
                        </div>

                    )}


                </TabsContent>
            </div>

        </Tabs>
    );
};

export default MemberTabs;