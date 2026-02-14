import { privateApi } from "../lib/api";
import { ApiResponse, IRoomType } from "../types";

export const getRoomType = async(): Promise<ApiResponse<IRoomType[]>> => {
    try {
        const res = await privateApi.get<ApiResponse<IRoomType[]>>("/roomtype");
        return res.data;
    } catch (error) {
        throw error; // handle error
    }
}