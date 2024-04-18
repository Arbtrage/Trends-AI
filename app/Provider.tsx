"use client"

import { createContext, useContext, useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";

const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  const ticker = createContext("AAPL");

    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default Provider
