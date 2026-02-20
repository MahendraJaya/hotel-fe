import { MutationFunction, useMutation } from "@tanstack/react-query";
import { ApiResponse, IPayment } from "../types";
import { payBooking } from "../services/payment.service";
import { AxiosError } from "axios";

const usePayment = () => {
  const createPayFn: MutationFunction<
    ApiResponse<IPayment>,
    { bookingId: string }
  > = async ({ bookingId }) => {
    const data = await payBooking(bookingId);
    return data;
  };

  const createPayment = useMutation<
    ApiResponse<IPayment>,
    AxiosError<ApiResponse<IPayment>>,
    { bookingId: string }
  >({
    mutationFn: createPayFn,
    onSuccess: (data) => {
      window.open(data.data?.paymentUrl);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {createPayment};
};

export default usePayment;
