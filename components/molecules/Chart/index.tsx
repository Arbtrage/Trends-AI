"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import { getHistoricalData } from "@/lib/fetchers";
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
import { filterDataByTimeFrame } from "@/lib/utils";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

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
            </div>
        );
    }

    return null;
};

const Chart = ({ ticker }: { ticker: string }) => {
    
    const [timeFrame, setTimeFrame] = useState("1W");
    const { data: res, isLoading,error } = useSWR(`/api/data/${ticker}`, fetcher)
    if(error) return <p>Failed to load</p>
    if (isLoading || !res) return <>Loading ...</>

    const unfilteredData = res?.message;
    const data = filterDataByTimeFrame(
        unfilteredData as ChartData[],
        timeFrame
    );

    const handleTimeFrameChange = (newTimeFrame: string) => {
        setTimeFrame(newTimeFrame);
    };

    return (
        <>
            {data && <Card className="flex flex-col w-full h-full rounded-lg border-2 p-4 relative">
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
                            <Bar
                                yAxisId="right"
                                dataKey="volume"
                                fill="#413ea0"
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </Card>}
        </>

    );
};

export default Chart;
