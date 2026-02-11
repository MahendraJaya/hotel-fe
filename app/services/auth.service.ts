import { publicApi } from '../lib/api';
import { ApiResponse, IToken } from './../types/index';


export const userLogin = async(email: string, password: string): Promise<ApiResponse<IToken>>=> {
    try {
        const res = await publicApi.post<ApiResponse<IToken>>("/auth/signin", {email, password});
        return res.data;
    } catch (error) {
    throw error; // handle error
    }
}