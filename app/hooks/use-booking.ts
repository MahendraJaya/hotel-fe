import { ApiResponse, ICreateBookingPayload } from "./../types/index";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { IBooking } from "../types";
import { createBooking, updateStatusBooking } from "../services/booking.service";
import { AxiosError } from "axios";
type TUseBookingProps = { onSuc?: () => void };
const useBooking = ({onSuc} : TUseBookingProps) => {
  const updateBookingFn: MutationFunction<
    ApiResponse<IBooking>,
    {id: string; status: string }
  > = async ({ id, status }) => {
    const response = await updateStatusBooking(id, status);
    return response;
  };

  const createBookingFn: MutationFunction<
    ApiResponse<IBooking>,
    ICreateBookingPayload
  > = async ({ id, guestId, checkInDate, checkOutDate, bookingDate, status, totalGuest, roomId, totalDay }) => {
    const response = await createBooking({ id, guestId, checkInDate, checkOutDate, bookingDate, status, totalGuest, roomId, totalDay });
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

  const createBookings = useMutation<
    ApiResponse<IBooking>,
    AxiosError<ApiResponse<IBooking>>,
    ICreateBookingPayload
  >({
    mutationFn: createBookingFn,
    onSuccess: (data) => {
      onSuc?.();
    },
    onError: (error) => {
      console.log("Erro while updating booking : ", error);
    },
  });

  return { updateBooking, createBookings };
};

export default useBooking;
