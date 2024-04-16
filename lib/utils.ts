import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}




export const fetcher = async (...args: [RequestInfo, RequestInit?]): Promise<any> => {
    const response = await fetch(...args);
    return response.json();
  };