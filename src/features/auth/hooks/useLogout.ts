import { useReactQueryClient } from "@/shared/libs/react-query/query-client";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../services/auth.api";

export const useLogout = () => {
  const { queryClient } = useReactQueryClient();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: async () => {
      await queryClient.cancelQueries();
      queryClient.clear();
    },
  });
};
