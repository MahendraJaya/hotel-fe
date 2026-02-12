import { MutationFunction, useMutation } from "@tanstack/react-query";
import { ApiResponse, IGuest } from "../types";
import { createGuest } from "../services/guest.service";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

type TUseGuestProps = {
    onSuc?: () => void;
    onClose?: () => void;
    onClear: () => void;
};

const useGuest = ({onSuc, onClose, onClear} : TUseGuestProps) => {
  const createGuestFn: MutationFunction<ApiResponse<IGuest>, IGuest> = async ({
    id,
    name,
    address,
    email,
    dateOfBirth,
  }) => {
    return await createGuest({ id, name, address, email, dateOfBirth });
  };

  const useCreateGuest = useMutation<
    ApiResponse<IGuest>,
    AxiosError<ApiResponse<IGuest>>,
    IGuest
  >({
    mutationFn: createGuestFn,
    onSuccess: (data) => {
      onSuc?.();
      onClose?.();
      onClear?.();
      toast.success(data.message); 
    },
    onError: (error) => {
      toast.error("Error : " + error.response?.data.message || "Something went wrong");
    },
  });

  return { useCreateGuest };
};

export default useGuest;
