import { ApiResponse } from "./../types/index";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { IBooking } from "../types";
import { updateStatusBooking } from "../services/booking.service";
import { AxiosError } from "axios";

const useBooking = () => {
  const updateBookingFn: MutationFunction<
    ApiResponse<IBooking>,
    {id: string; status: string }
  > = async ({ id, status }) => {
    const response = await updateStatusBooking(id, status);
    return response;
  };

  const updateBooking = useMutation<
    ApiResponse<IBooking>,
    AxiosError<ApiResponse<IBooking>>,
    { id: string; status: string }
  >({
    mutationFn: updateBookingFn,
    onSuccess: (data) => {
      console.log(status);
    },
    onError: (error) => {
      console.log("Erro while updating booking : ", error);
    },
  });

  return { updateBooking };
};

export default useBooking;
