import { privateApi } from "../lib/api";
import { ApiResponse, IBooking, ICreateBookingPayload } from "../types";

export const getBookingCheckin = async (): Promise<ApiResponse<IBooking[]>> => {
  try {
    const res =
      await privateApi.get<ApiResponse<IBooking[]>>("/booking/checkin");
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};


export const updateStatusBooking = async (
  id: string,
  status: string,
): Promise<ApiResponse<IBooking>> => {
  console.log("from booking : ", status);
  try {
    const res = await privateApi.put<ApiResponse<IBooking>>(
      `/booking/checkin/${id}`,
      { status },
    );
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};

export const createBooking = async (
  booking: ICreateBookingPayload,
): Promise<ApiResponse<IBooking>> => {
  try {
    const res = await privateApi.post<ApiResponse<IBooking>>(
      `/booking/`,
      booking
    );
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};
