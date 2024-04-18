import React from 'react'
import { Image, Card } from "@nextui-org/react";
import NextImage from "next/image";
import Link from 'next/link';

const NavItems = ({ item }: { item: string }) => {
    return (
        <Link href={'/'} className='w-full p-2 pl-3 m-2 flex flex-col items-start hover:bg-slate-200 transition rounded-full'>
            {item}
        </Link>
    )
}

const links = [
    {
        name: 'Home',
        link: '/'
    }, {
        name: 'About',
        link: '/about'
    }, {
        name: 'Contact',
        link: '/contact'
    }]


const SideNav = () => {
    return (
        <div className='w-[15%] hidden p-10  bg-gray-800 md:flex md:flex-col items-center space-between rounded-r-lg'>
            <Image
                as={NextImage}
                width={100}
                height={100}
                src="/bot.png"
                alt="Bot Logo"
            />

            <div className='mt-10 w-full '>
                {links.map((link, index) => {
                    return <NavItems key={index} item={link.name} />
                })}
            </div>

        </div>
    )
}

export default SideNav
