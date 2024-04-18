// components/FundCard.tsx
import React from 'react';
import Image from 'next/image';
import { FaArrowUp, FaArrowDown, FaHeart, FaRegHeart, FaShareSquare } from 'react-icons/fa';

interface InsightsProps {
  symbol: string;
  fundName: string;
  managementCompany: string;
  cagr: string;
  yearlyStatistics: string;
  expenseRatio: string;
  totalAUM: string;
  risk: string;
}

const Insights: React.FC<InsightsProps> = ({
  symbol,
  fundName,
  managementCompany,
  cagr,
  yearlyStatistics,
  expenseRatio,
  totalAUM,
  risk,
}) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 flex w-full flex-col gap-2">
      <div className="flex items-center">
        <div className="bg-gray-700 p-3 rounded-lg mr-4">{symbol}</div>
        <div>
          <h3 className="md:text-lg text-sm font-semibold">{fundName}</h3>
          <p className="text-sm text-gray-400">{managementCompany}</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="flex flex-col items-center">
          <span className="font-bold md:text-lg text-sm">{cagr}</span>
          <span className="text-green-400 text-sm flex items-center"><FaArrowUp/>52 Week High</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold md:text-lg text-sm">{cagr}</span>
          <span className="text-red-400 text-sm flex items-center"><FaArrowDown/>52 Week low</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold md:text-lg text-sm">{yearlyStatistics}</span>
          <span className="text-green-400 text-sm">Moving Average</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold md:text-lg text-sm">{expenseRatio}</span>
          <span className="text-sm">Revenue</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold md:text-lg text-sm">{totalAUM}</span>
          <span className="text-sm">ProfitMargin</span>
        </div>
      </div>
      
    </div>
  );
};

export default Insights;
