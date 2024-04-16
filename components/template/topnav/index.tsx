import React from 'react'
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

const TopNav = () => {
  return (
    <div className='w-fit md:hidden block p-2'>
      <Image
        as={NextImage}
        width={50}
        height={50}
        src="/bot.png"
        alt="Bot Logo"
      />
    </div>
  )
}

export default TopNav
