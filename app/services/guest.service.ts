import { privateApi, publicApi } from "../lib/api";
import { ApiResponse, IGuest } from "../types";

export const getGuest = async (): Promise<ApiResponse<IGuest[]>> => {
  try {
    const res = await publicApi.get<ApiResponse<IGuest[]>>("/guest");
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};

export const createGuest = async (data:IGuest): Promise<ApiResponse<IGuest>> => {
  try {
    const res = await privateApi.post<ApiResponse<IGuest>>("/guest", data, { headers: { "Content-Type": "application/json" } });
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};