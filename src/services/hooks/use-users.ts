import { useQuery, useQueryClient } from "react-query";
import axiosInstance from "../helpers/axios-instance";

export default function useUsers() {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching, error } = useQuery("users", async () => {
    const response = await axiosInstance.get("Subscribe");
    return response.data;
  });

  return {
    usersData: data || [],
    isLoading,
    isFetching,
    error,
    invalidateUsersQuery: () => {
      queryClient.invalidateQueries("users");
    },
  };
}