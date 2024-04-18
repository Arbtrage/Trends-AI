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

export const filterDataByTimeFrame = (data:any, timeFrame:any) => {
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

  return data.filter((item:any) => {
    const itemDate = new Date(item.date);
    return itemDate >= pastDate;
  });
};
