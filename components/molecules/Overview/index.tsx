"use client"

import StatsCard from '@/components/atoms/StatsCard'
import useSWR from 'swr'
import { fetcher } from '@/lib/utils'

const Overview = ({ ticker }: { ticker: string }) => {
    const { data: res, isLoading,error } = useSWR(`/api/quote/${ticker}`, fetcher);

    if(error) return <p>Failed to load</p>
    if (isLoading) return <><p>Loading...</p></>
    const data = res?.message;


    return (
        <div className='flex min-w-fit  items-start'>
            {data && <StatsCard data={data["Global Quote"]} />}
        </div>
    )
}

export default Overview