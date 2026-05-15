import type {Member, MemberResponse} from "@/features/member/types/member.type.ts";
import type {ReactNode} from "react";
import Avatar from "@/shared/components/avatar/Avatar.tsx";

type MemberItemProps = {
    user: MemberResponse | Member;
    action?: ReactNode;
}
const MemberItem = ({user, action}: MemberItemProps) => {
    return (
        <div className={"flex items-center justify-between"}>
            <div className={"flex items-center gap-2 px-3 py-2 rounded-full"}>
                <Avatar avatarUrl={user.avatar_url} size={"xs"}/>
                <span className={"text-sm"}>{user.first_name} {user.last_name}</span>
            </div>
            {action}
        </div>
    );
};

export default MemberItem;