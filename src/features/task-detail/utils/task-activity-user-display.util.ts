type UserDisplayMember = {
  id: string;
  first_name?: string;
  last_name?: string;
};

export const getUserDisplayName = (
  member?: UserDisplayMember | null,
  currentUserId?: string,
) => {
  if (!member) return "";

  return member.id === currentUserId
    ? "Me"
    : `${member.first_name || ""} ${member.last_name || ""}`.trim();
};

export const isCurrentUserDisplay = (
  member?: UserDisplayMember | null,
  currentUserId?: string,
): boolean => {
  return !!member && member.id === currentUserId;
};
