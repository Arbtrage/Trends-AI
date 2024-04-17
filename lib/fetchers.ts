import axios from "axios";
import { baseUrl } from "@/constants/config";

export const getTickers = async ({ ticker }: { ticker: string }) => {
    try {     
        const response = await axios.get(`${baseUrl}/search?q=${ticker}&token=${process.env.NEXT_PUBLIC_KEY}`);
        return {status:200, message: response.data};
    } catch (error) {
        return {status:500, message: "An unexpected error occurred"}
    }
}


export const getOverview = async ({ ticker }: { ticker: string }) => {
    try {     
        const response = await axios.get(`${baseUrl}/stock/profile2?symbol=${ticker}&token=${process.env.NEXT_PUBLIC_KEY}`);
        return {status:200, message: response.data};
    } catch (error) {
        return {status:500, message: "An unexpected error occurred"}
    }
}