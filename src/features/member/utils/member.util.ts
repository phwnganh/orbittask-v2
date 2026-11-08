export const getInviteStatusLabel = (inviteStatus: string) => {
    switch (inviteStatus) {
        case 'none':
        case 'rejected':
            return 'Invite';
        case 'pending':
            return 'Invited';
        case 'accepted':
            return 'Already Member';
        default:
            return '';
    }
}