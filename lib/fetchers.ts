import axios from "axios";
import { baseUrl } from "@/constants/config";

export const getTickers = async ({ ticker }: { ticker: string }) => {
    try {
        const response = await axios.get(
            `${baseUrl}/search?q=${ticker}&token=${process.env.NEXT_PUBLIC_KEY}`
        );
        return { status: 200, message: response.data };
    } catch (error) {
        return { status: 500, message: "An unexpected error occurred" };
    }
};

export const getOverview = async ({ ticker }: { ticker: string }) => {
    try {
        const response = await axios.get(
            `${baseUrl}/stock/profile2?symbol=${ticker}&token=${process.env.NEXT_PUBLIC_KEY}`
        );
        return { status: 200, message: response.data };
    } catch (error) {
        return { status: 500, message: "An unexpected error occurred" };
    }
};

export const getHistoricalData = async ({ stockSymbol }: any) => {
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol: 'IBM',
            outputsize: 'compact',
            datatype: 'json'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_URL
        }
    };

    try {
        const response = await axios.request(options);
        const series = response.data['Time Series (Daily)'];
        const data = Object.entries(series).map(([date, value]: [string, any]) => ({
            date,
            open: parseFloat(value['1. open']),
            high: parseFloat(value['2. high']),
            low: parseFloat(value['3. low']),
            close: parseFloat(value['4. close']),
            volume: parseInt(value['5. volume']),
        }));
        return { status: 200, message: data };
    } catch (error) {
        console.error('Error fetching stock data:', error);
        return { status: 500, message: "An unexpected error occurred" };
    }
};