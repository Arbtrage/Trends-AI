"use client"

import React, { useEffect, useState } from 'react'
import { getOverview } from '@/lib/fetchers'
import StatsCard from '@/components/atoms/StatsCard'

const stockStats = {
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "184.1600",
        "03. high": "184.6700",
        "04. low": "181.7800",
        "05. price": "183.1000",
        "06. volume": "3003033",
        "07. latest trading day": "2024-04-17",
        "08. previous close": "183.7500",
        "09. change": "-0.6500",
        "10. change percent": "-0.3537%"
    }
}

const Overview = ({ ticker }: { ticker: string }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<any>();

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                console.log(ticker)
                const { status, message } = await getOverview({ ticker: ticker });
                if (status === 200) {
                    setData(message);
                } else {
                    throw new Error(message)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };

        getData();
    }, [ticker]);


    return (
        <div className='flex min-w-fit  items-start'>
            <StatsCard data={stockStats["Global Quote"]} />
        </div>
    )
}

export default Overview