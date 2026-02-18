import { privateApi } from "../lib/api";
import { ApiResponse, IRoom } from "../types";

export const getRoom = async(roomtype?: string, startdate?: string, enddate?: string): Promise<ApiResponse<IRoom[]>> => {
    try {
        const res = await privateApi.get<ApiResponse<IRoom[]>>("/room", {params: {roomtype, startdate, enddate}});
        return res.data;
    } catch (error) {
        throw error; // handle error
    }
}