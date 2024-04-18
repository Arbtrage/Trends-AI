// StatsCard.tsx
import React from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { formatCurrency } from '@/lib/utils';

const StatsCard = ({ data }: any) => {
    if (!data) return <p>Loading...</p>;

    const change = parseFloat(data["09. change"]);
    const changePercent = parseFloat(data["10. change percent"].replace('%', ''));

    return (
        <div className='bg-white text-gray-600 shadow-lg rounded-lg p-4 flex flex-col items-start space-y-3 w-full'>
            <h2 className="text-xl font-bold text-gray-800">{data["01. symbol"]} - Stock Overview</h2>
            <div className="text-sm space-y-1">
                <p className='text-green-500'><strong>Open:</strong> {formatCurrency(data["02. open"])}</p>
                <p className='text-green-700'><strong>High:</strong> {formatCurrency(data["03. high"])}</p>
                <p className='text-red-300'><strong>Low:</strong> {formatCurrency(data["04. low"])}</p>
                <p><strong>Current Price:</strong> {formatCurrency(data["05. price"])}</p>
                <p><strong>Previous Close:</strong> {formatCurrency(data["08. previous close"])}</p>
                <p className={`flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <strong>Change:</strong> {formatCurrency(data["09. change"])}
                    {change >= 0 ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
                    ({changePercent.toFixed(2)}%)
                </p>
                <p><strong>Volume:</strong> {Number(data["06. volume"]).toLocaleString()}</p>
                <p><strong>Latest Trading Day:</strong> {data["07. latest trading day"]}</p>
            </div>
        </div>
    );
};

export default StatsCard;
