"use client";

import React, { useEffect, useState } from "react";
import { Card, Skeleton } from "@nextui-org/react";
import ChartFilter from "@/components/atoms/Filter";
import { chartConfig } from "@/constants/config";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import useSWR from "swr";
import {
  fetcher,
  calculateMovingAverage,
  filterDataByTimeFrame,
} from "@/lib/utils";

interface ChartData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded">
        <p>{`Date: ${label}`}</p>
        <p>{`Open: ${payload[0].payload.open}`}</p>
        <p>{`High: ${payload[0].payload.high}`}</p>
        <p>{`Low: ${payload[0].payload.low}`}</p>
        <p>{`Close: ${payload[0].payload.close}`}</p>
        <p>{`Volume: ${payload[0].payload.volume}`}</p>
        <p>{`Moving Avg: ${payload[0].payload.movingAverage.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

const Chart = ({ ticker }: { ticker: string }) => {
  const [timeFrame, setTimeFrame] = useState("1W");
  const [movingAveragePeriod, setMovingAveragePeriod] = useState(1);
  const {
    data: res,
    isLoading,
    error,
  } = useSWR(`/api/data/${ticker}`, fetcher);
  if (error) return <p>Failed to load</p>;
  if (isLoading || !res)
    return (
      <>
        <Skeleton className="rounded-lg h-full w-full">
          <div className="h-full w-full rounded-lg bg-default-300"></div>
        </Skeleton>
      </>
    );

  const unfilteredData = res?.message;
  let data = filterDataByTimeFrame(unfilteredData as ChartData[], timeFrame);

  if (data) data = calculateMovingAverage(data, movingAveragePeriod);
  const handleTimeFrameChange = (newTimeFrame: string) => {
    setTimeFrame(newTimeFrame);
  };

  return (
    <>
      {data && (
        <Card className="flex flex-col w-full h-full rounded-lg border-2 p-4 relative">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <ul className="flex justify-end space-x-2 mb-4">
              {Object.keys(chartConfig).map((item) => (
                <li key={item} className="last:mr-0">
                  <ChartFilter
                    text={item}
                    active={timeFrame === item}
                    onClick={() => setTimeFrame(item)}
                  />
                </li>
              ))}
            </ul>
            <div className="flex justify-start items-center space-x-4 mb-4">
              <label className="text-sm font-semibold text-gray-700">
                Moving Average Period:
              </label>
              <input
                type="number"
                value={movingAveragePeriod}
                onChange={(e) => setMovingAveragePeriod(Number(e.target.value))}
                min="1"
                max="30"
                className="w-20 px-2 py-1 border rounded-md text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Period"
              />
            </div>
          </div>
          <div className="flex-grow relative">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data}>
                <defs>
                  <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" hide={true} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="low"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorLow)"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="close"
                  stroke="#ff7300"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="movingAverage"
                  stroke="#34D399"
                  dot={false}
                />
                <Bar yAxisId="right" dataKey="volume" fill="#413ea0" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chart;
