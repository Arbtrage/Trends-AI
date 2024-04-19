import React from 'react'
import { Image, Card } from "@nextui-org/react";
import NextImage from "next/image";
import Link from 'next/link';

const NavItems = ({ item }: { item: string }) => {
    return (
        <Link href={'/'} className='w-full p-2 pl-5 mb-3 flex flex-col items-start text-bold hover:scale-105 transition  text-white '>
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
        <div className='w-[15%] hidden min-h-screen  bg-gray-800 md:flex md:flex-col items-center space-between rounded-r-lg'>
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
