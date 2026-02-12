import {
  useMutation,
  MutationFunction,
  useQueryClient,
} from "@tanstack/react-query";
import { userLogin } from "../services/auth.service";
import { ApiResponse, IToken } from "../types";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const useLoginUser = () => {
  const queryClient = useQueryClient();

  const mutationFn: MutationFunction<
    ApiResponse<IToken>,
    { email: string; password: string }
  > = async ({ email, password }) => {
    const response = await userLogin(email, password);
    return response;
  };

  const router = useRouter();

  const { mutate, isError, isSuccess, data, error } = useMutation<
    ApiResponse<IToken>,
    AxiosError<ApiResponse<IToken>>,
    { email: string; password: string }
  >({
    mutationFn,
    onSuccess: (data) => {
      // queryClient.setQueryData(["token"], data?.data?.token);
      if (data?.data?.token) {
        localStorage.setItem("token", data.data.token);
        router.push("/admin/guest");
      }
    },
    onError: (error) => {
      // console.error(error.response?.status);
      toast.error("Error : " + error.response?.data.message || "Something went wrong");
    },
  });

  return {
    mutate,
    isError,
    isSuccess,
    data,
    error,
  };
};

export default useLoginUser;
