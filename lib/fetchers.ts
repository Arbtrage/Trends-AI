import axios from "axios";
import { baseUrl } from "@/constants/config";

export const getTickers = async ({ ticker }: { ticker: string }) => {
    ticker = !ticker || ticker.length < 2 ? 'Apple' : ticker;

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          keywords: ticker,
          function: 'SYMBOL_SEARCH',
          datatype: 'json'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_URL
        }
      };
    try {
        const response = await axios.request(options);
        if (response.status === 429) throw new Error("Api rate limit exceeded");
        if(response.status!==200) throw new Error("Error")
        return { status: 200, message: response.data };
    } catch (error) {
        return { status: 500, message: "An unexpected error occurred" };
    }
};


export const getQuote = async ({ ticker }: { ticker: string }) => {
    ticker = !ticker || ticker.length < 2  ? 'AAPL' : ticker;
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'GLOBAL_QUOTE',
            symbol: ticker,
            datatype: 'json'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_URL
        }
    };
    try {
        const response = await axios.request(options);
        if(response.status===429) throw new Error("Api rate limit exceeded");
        if (response.status !== 200) throw new Error("Error");
        return { status: 200, message: response.data };
    } catch (error) {
        return { status: 500, message: "An unexpected error occurred" };
    }
}

export const getOverview = async ({ ticker }: { ticker: string }) => {
    ticker = !ticker || ticker.length < 2 ? 'AAPL' : ticker;
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'OVERVIEW',
            symbol: ticker,
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_URL
        }
    };

    try {
        const response = await axios.request(options);
        if (response.status === 429) throw new Error("Api rate limit exceeded");
        if(response.status!==200) throw new Error("Error")
        const data = {
            symbol: response.data["Symbol"],
            name: response.data["Name"],
            description: response.data["Description"],
            currency:  response.data["Currency"],
            weekhigh:  response.data["52WeekHigh"],
            weeklow:   response.data["52WeekLow"],
            movingaverage: response.data["50DayMovingAverage"],
            revenue: response.data["RevenueTTM"],
            profitMargin: response.data["ProfitMargin"],
            managementCompany: response.data["ManagementCompany"],
            cagr: response.data["CAGR"],
        }
        console.log(data);
        return { status: 200, message: data };
    } catch (error) {
        return { status: 500, message: "An unexpected error occurred" };
    }
};

export const getHistoricalData = async ({ stockSymbol }: any) => {
    stockSymbol = !stockSymbol || stockSymbol.length < 2 ? 'AAPL' : stockSymbol;
    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol: stockSymbol,
            outputsize: 'compact',
            datatype: 'json'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY2,
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