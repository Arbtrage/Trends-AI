"use client"

import { useState } from 'react'
import Insights from '@/components/molecules/Insights'
import Search from '@/components/molecules/Search'
import Chart from '@/components/molecules/Chart'
import Overview from '@/components/molecules/Overview'

const Dashboard = () => {
    const [ticker, setTicker] = useState<string>("AAPL");
    return (
        <div
            className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 bg-neutral-50 text-gray-300 rounded-lg"
        >
            <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
                <Search setTicker={setTicker } />
            </div>
            <div className="md:col-span-2 row-span-4">
                <Chart ticker={ticker} />
            </div>
            <div>
                <Overview ticker={ticker}/>
            </div>
            <div className="row-span-2 xl:row-span-3">
                Chat UI
            </div>
        </div>
    )
}

export default Dashboard
