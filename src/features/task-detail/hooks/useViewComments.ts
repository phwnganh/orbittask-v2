import { useQuery } from "@tanstack/react-query";
import { commentKeys } from "../constants/comment-query-key.constant";
import { viewAllComentsApi } from "../services/task-comment.api";
import type { Comment } from "../types/comment.type";

export const useViewComments = ({ task_id }: { task_id: string }) => {
  return useQuery<Comment[]>({
    queryKey: commentKeys.list(task_id),
    queryFn: () => viewAllComentsApi(task_id),
  });
};
