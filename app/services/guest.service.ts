import { AxiosError } from "axios";
import { publicApi } from "../lib/api";
import { ApiResponse, IGuest } from "../types";

export const getGuest = async (): Promise<ApiResponse<IGuest[]>> => {
  try {
    const res = await publicApi.get<ApiResponse<IGuest[]>>("/guest");
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};
