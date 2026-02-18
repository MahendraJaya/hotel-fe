import { privateApi, publicApi } from "../lib/api";
import { ApiResponse, IGuest } from "../types";

export const getGuest = async (page:number): Promise<ApiResponse<IGuest[]>> => {
  try {
    const res = await publicApi.get<ApiResponse<IGuest[]>>("/guest", {params: {page}});
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};
export const getAllGuest = async (): Promise<ApiResponse<IGuest[]>> => {
  try {
    const res = await publicApi.get<ApiResponse<IGuest[]>>("/guest/all");
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};

export const createGuest = async (
  data: IGuest,
): Promise<ApiResponse<IGuest>> => {
  try {
    const res = await privateApi.post<ApiResponse<IGuest>>("/guest", data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};

export const updateGuest = async (
  id: string,
  data: IGuest,
): Promise<ApiResponse<IGuest>> => {
  try {
    const res = await privateApi.put<ApiResponse<IGuest>>(`/guest/${id}`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return res.data;
  } catch (error) {
    throw error; // handle error
  }
};
