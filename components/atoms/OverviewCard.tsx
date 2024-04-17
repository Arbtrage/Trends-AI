import React from 'react'
import { Avatar } from "@nextui-org/react";
import { mockCompanyDetails } from '@/constants/mocks';

const OverviewCard = ({ data}:any) => {
    // const data = mockCompanyDetails;
    return (
        <div className='w-full flex flex-col md:flex-row gap-3 text-black'>
            <Avatar src={data?.logo} size="lg" />
            <div>
                <h3>{data?.name}</h3>
                <p>{data?.country}</p>
                <p>{data?.finnhubIndustry}</p>
            </div>
        </div>
    )
}

export default OverviewCard
