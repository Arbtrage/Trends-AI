import axios from "axios";

const apiBaseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_URL
    }
};

const fetchData = async (options:any) => {
    try {
        const response = await axios.request(options);
        if (response.status === 429) throw new Error("API rate limit exceeded");
        if (response.status !== 200) throw new Error("Error fetching data");
        return { status: 200, message: response.data };
    } catch (error:any) {
        return { status: 500, message: error.message || "An unexpected error occurred" };
    }
};

const validateTicker = (ticker:string) => !ticker || ticker.length < 2 ? 'AAPL' : ticker;

export const getTickers = async ({ ticker }:{ ticker: string }) => {
    ticker = validateTicker(ticker);
    const options = {
        ...apiBaseOptions,
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            keywords: ticker,
            function: 'SYMBOL_SEARCH',
            datatype: 'json'
        }
    };
    return fetchData(options);
};

export const getQuote = async ({ ticker }:{ ticker: string }) => {
    ticker = validateTicker(ticker);
    const options = {
        ...apiBaseOptions,
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'GLOBAL_QUOTE',
            symbol: ticker,
            datatype: 'json'
        }
    };
    return fetchData(options);
};

export const getOverview = async ({ ticker }:{ ticker: string }) => {
    ticker = validateTicker(ticker);
    const options = {
        ...apiBaseOptions,
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'OVERVIEW',
            symbol: ticker,
        }
    };
    const result = await fetchData(options);
    if (result.status === 200) {
        const data = {
            symbol: result.message["Symbol"],
            name: result.message["Name"],
            description: result.message["Description"],
            currency:  result.message["Currency"],
            weekhigh:  result.message["52WeekHigh"],
            weeklow:   result.message["52WeekLow"],
            movingaverage: result.message["50DayMovingAverage"],
            revenue: result.message["RevenueTTM"],
            profitMargin: result.message["ProfitMargin"],
            managementCompany: result.message["ManagementCompany"],
            cagr: result.message["CAGR"],
        };
        return { status: 200, message: data };
    }
    return result;
};

export const getHistoricalData = async ({ stockSymbol }: {stockSymbol: string}) => {
    stockSymbol = validateTicker(stockSymbol);
    const options = {
        ...apiBaseOptions,
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol: stockSymbol,
            outputsize: 'compact',
            datatype: 'json'
        }
    };
    const result = await fetchData(options);
    if (result.status === 200) {
        const series = result.message['Time Series (Daily)'];
        const data = Object.entries(series).map(([date, value]: [string, any]) => ({
            date,
            open: parseFloat(value['1. open']),
            high: parseFloat(value['2. high']),
            low: parseFloat(value['3. low']),
            close: parseFloat(value['4. close']),
            volume: parseInt(value['5. volume']),
        }));
        return { status: 200, message: data };
    }
    return result;
};
