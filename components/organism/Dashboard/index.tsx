"use client"

import Chart from '@/components/molecules/Chart'
import Insights from '@/components/molecules/Insights'
import { getOverview, getQuote } from '@/lib/fetchers'
import { useTicker } from '@/context/TickerContext'

const Dashboard = () => {
    const { ticker } = useTicker();

    return (
        <div className='min-h-screen  flex gap-5 flex-col p-5 mt-2 bg-neutral-100 text-gray-700 rounded-lg' >
            <div className="flex justify-start items-center">
                <Insights ticker={ticker} />
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-start h-full">
                <Chart ticker={ticker}/>
            </div>
        </div>

    )
}

export default Dashboard
