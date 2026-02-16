import { privateApi } from "../lib/api";
import { ApiResponse, IBooking } from "../types";

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
