import { privateApi } from "../lib/api";
import { ApiResponse, IPayment } from "../types";

export const payBooking = async (
  bookingId: string,
): Promise<ApiResponse<IPayment>> => {
  try {
    const data = await privateApi.post<ApiResponse<IPayment>>(
      `/booking/`,
      bookingId,
    );
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const cekMidtransStatus = async (
  id: string,
): Promise<ApiResponse<IPayment>> => {
  try {
     const res = await privateApi.get<ApiResponse<IPayment>>(
    `/payment/check/${id}`,
  );
    return res.data;
  } catch (error) {
    throw error;
  }
};