import Avatar from "@/shared/components/avatar/Avatar.tsx";
import type {MemberResponse} from "@/features/member/types/member.type.ts";

type AvatarGroupProps = {
    users: MemberResponse[];
    max?: number;
    size?: "xs" | "sm" | "md";
}
const AvatarGroup = ({users, max = 3, size = "xs"}: AvatarGroupProps) => {
    const visibleUsers = users.slice(0, max)
    const remaining = users.length - max;
    return (
        <div className={"flex items-center"}>
            <div className={"flex -space-x-2"}>
                {visibleUsers.map(user =>
                <Avatar key={user.user_id} avatarUrl={user.avatar_url} name={user.last_name} size={size} className={"border border-bg-secondary"}/>)}
            </div>

            {remaining > 0 && (
                <div className={"ml-1 text-xs text-text-muted font-medium"}>+{remaining}</div>
            )}
        </div>
    );
};

export default AvatarGroup;