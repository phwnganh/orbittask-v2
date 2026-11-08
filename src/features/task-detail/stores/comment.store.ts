import {create} from "zustand";

type RemoveCommentModalState = {
    isOpen: boolean;
    selectedCommentId: string | null;
    selectedContent: string | null;
}
type CommentState = {
    openRemovingComment: RemoveCommentModalState;
    onOpenRemovingComment: (commentId: string, content?: string | null) => void;
    onCloseRemovingComment: () => void;
}

export const useCommentStore = create<CommentState>((set) => ({
    openRemovingComment: {
        isOpen: false,
        selectedCommentId: null,
        selectedContent: null
    },
    onOpenRemovingComment: (commentId, content = null) => set({
        openRemovingComment: {
            isOpen: true,
            selectedCommentId: commentId,
            selectedContent: content ?? null
        }
    }),
    onCloseRemovingComment: () => set({
        openRemovingComment: {
            isOpen: false,
            selectedCommentId: null,
            selectedContent: null
        }
    })
}))
