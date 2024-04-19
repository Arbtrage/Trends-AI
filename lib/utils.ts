import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: string): string => {
  return parseFloat(amount).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
  });
};


export const fetcher = async (...args: [RequestInfo, RequestInit?]): Promise<any> => {
    const response = await fetch(...args);
    return response.json();
};

export const calculateMovingAverage = (data:any, period:any) => {
  if (data.length < period) {
      console.log("Not enough data to calculate moving average");
      return [];
  }

  let averages = [];
  for (let i = period - 1; i < data.length; i++) {
      let sum = 0;
      for (let j = 0; j < period; j++) {
          sum += data[i - j].close;
      }
      const avg = sum / period;
      averages.push({ ...data[i], movingAverage: avg });
  }
  return averages;
};

export const formatLargeNumber=(number:any)=> {
  // Convert the number to a string and get its length
  if (!number) return null;
  let numStr = number.toString();
  let suffix = '';
  let formattedNumber = number;

  if (numStr.length > 9) { // For billion
    formattedNumber = (number / 1e9).toFixed(2);
    suffix = 'B';
  } else if (numStr.length > 6) { // For million
    formattedNumber = (number / 1e6).toFixed(2);
    suffix = 'M';
  } else if (numStr.length > 3) { // For thousand
    formattedNumber = (number / 1e3).toFixed(2);
    suffix = 'K';
  }

  return `${formattedNumber}${suffix}`;
}

export const convertDateToUnixTimestamp = (date:any) => {
  return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimestampToDate = (unixTimestamp:any) => {
  const milliseconds = unixTimestamp * 1000;
  return new Date(milliseconds).toLocaleDateString();
};

export const createDate = (date:any, days:any, weeks:any, months:any, years:any) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};


const subtractTime = (date:any, days:any, months:any, years:any) => {
  return new Date(
    date.getFullYear() - years,
    date.getMonth() - months,
    date.getDate() - days
  );
};

export const filterDataByTimeFrame = (data: any, timeFrame: any) => {
  if (!data || data.length===0) return null;

  const now = new Date();
  let pastDate;

  switch (timeFrame) {
    case '1W':
      pastDate = subtractTime(now, 7, 0, 0);
      break;
    case '1M':
      pastDate = subtractTime(now, 0, 1, 0);
      break;
    case '1Y':
      pastDate = subtractTime(now, 0, 0, 1);
      break;
    case '10Y':
      pastDate = subtractTime(now, 0, 0, 10);
      break;
    default:
      pastDate = subtractTime(now, 7, 0, 0); // Default to 1 week
  }

  return data?.filter((item:any) => {
    const itemDate = new Date(item.date);
    return itemDate >= pastDate;
  });
};
