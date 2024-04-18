"use client"

import { useState } from 'react'
import Search from '@/components/molecules/Search'
import Chart from '@/components/molecules/Chart'
import Overview from '@/components/molecules/Overview'
import Insights from '@/components/molecules/Insights'

const Dashboard = () => {
    const [ticker, setTicker] = useState<string>("AAPL");
    return (
        // <div className="h-screen mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 bg-neutral-50 text-gray-300 rounded-lg overflow-auto">
        // <div className="col-span-full row-span-1 flex justify-start items-center">
        //     <Insights symbol="AB"
        //         fundName="ABF Indonesia Bond Index Fund"
        //         managementCompany="PT Bahana TCW Investment Management"
        //         cagr="18.38%"
        //         yearlyStatistics="$2.58 M"
        //         expenseRatio="17.5%"
        //         totalAUM="$2.58 M"
        //         risk="Medium" />
        // </div>
        //     <div className="col-span-full md:col-span-2 xl:col-span-2 row-span-3 md:row-span-4">
        //         <Chart ticker={ticker} />
        //     </div>
        // <div className="col-span-full md:col-span-1 xl:col-span-1 row-span-2">
        //     <Overview ticker={ticker} />
        // </div>
        // </div>
        <div className='h-screen overflow-auto flex gap-5 flex-col p-5 mt-2 bg-neutral-100 text-gray-700 rounded-lg' >
            <div className="flex justify-start items-center">
                <Insights symbol="AB"
                    fundName="ABF Indonesia Bond Index Fund"
                    managementCompany="PT Bahana TCW Investment Management"
                    cagr="18.38%"
                    yearlyStatistics="$2.58 M"
                    expenseRatio="17.5%"
                    totalAUM="$2.58 M"
                    risk="Medium" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-start h-full">
                <Chart ticker={ticker} />
                <Overview ticker={ticker} />
            </div>
        </div>

    )
}

export default Dashboard
