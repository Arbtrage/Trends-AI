"use client"

import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default Provider
