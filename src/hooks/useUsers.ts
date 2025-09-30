import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/fetchUsers";

export const useUsers = (URL_BASE: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", URL_BASE],
    queryFn: () => fetchUsers(URL_BASE),
    staleTime: 60000,
  });
  return {
    data,
    isLoading,
    isError,
    error,
  };
};
