"use client"

import { FaArrowUp, FaArrowDown, FaHeart, FaRegHeart, FaShareSquare } from 'react-icons/fa';
import useSWR from 'swr';
import { fetcher } from '@/lib/utils';

const Insights = ({ ticker }: { ticker: string }) => {

  const { data: res, isLoading, error } = useSWR(`/api/insights/${ticker}`, fetcher)
  if (error) return <p>Failed to load</p>
  if (isLoading) return <>Loading .....</>

  const data = res?.message;
  return (
    <>
      {data && <div className="bg-gray-800 text-white rounded-lg p-4 flex w-full flex-col gap-2">
        <div className="flex items-center">
          <div className="bg-gray-700 p-3 rounded-lg mr-4">{data?.symbol}</div>
          <div>
            <h3 className="md:text-lg text-sm font-semibold">{data?.name}</h3>
            <p className="text-sm text-gray-400">{data?.currency}</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center">
            <span className="font-bold md:text-lg text-sm">{data?.weekhigh}</span>
            <span className="text-green-400 text-sm flex items-center"><FaArrowUp />52 Week High</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold md:text-lg text-sm">{data?.weeklow}</span>
            <span className="text-red-400 text-sm flex items-center"><FaArrowDown />52 Week low</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold md:text-lg text-sm">{data?.movingaverage}</span>
            <span className="text-green-400 text-sm">Moving Average</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold md:text-lg text-sm">{data?.revenue}</span>
            <span className="text-sm">Revenue</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold md:text-lg text-sm">{data?.profitMargin}</span>
            <span className="text-sm">ProfitMargin</span>
          </div>
        </div>

      </div>}
    </>

  );
};

export default Insights;
