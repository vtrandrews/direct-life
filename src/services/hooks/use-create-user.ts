import { useMutation } from "react-query";
import axiosInstance from "../helpers/axios-instance";
import { User } from "../../data/types/user";
import useUsers from "./use-users";

export default function useCreateUser() {
  const { invalidateUsersQuery } = useUsers();

  const mutation = useMutation(
    async (user: User) => {
      const response = await axiosInstance.post("Subscribe", user);
      return response.data;
    },
    {
      onSuccess: () => invalidateUsersQuery(),
    }
  );

  return mutation;
};