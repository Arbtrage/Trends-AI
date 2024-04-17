"use client"

import React, { useEffect, useState } from 'react'
import { getOverview } from '@/lib/fetchers'
import OverviewCard from '@/components/atoms/OverviewCard'

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
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && <OverviewCard data={data}/>}
        </div>
    )
}

export default Overview