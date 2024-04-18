"use client"

import { useEffect, useState } from 'react'
import Chart from '@/components/molecules/Chart'
import Overview from '@/components/molecules/Overview'
import Insights from '@/components/molecules/Insights'
import { getOverview, getQuote } from '@/lib/fetchers'
import { useTicker } from '@/context/TickerContext'

const Dashboard = () => {
    const { ticker, setTicker, ready, setReady } = useTicker();

    return (
        <div className='h-screen overflow-hidden flex gap-5 flex-col p-5 mt-2 bg-neutral-100 text-gray-700 rounded-lg' >
            <div className="flex justify-start items-center">
                <Insights ticker={ticker} />
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-start h-full">
                <Chart ticker={ticker}/>
                {/* <Overview ticker={ticker}/> */}
            </div>


        </div>

    )
}

export default Dashboard
