"use client"

import React, { createContext, useContext, useState } from 'react';

const TickerContext = createContext({
    ticker: '',
    ready: false,
    setReady: (ready: boolean) => { },
    setTicker: (ticker: string) => { },
});

export const useTicker = () => useContext(TickerContext);

export function TickerProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    const [ticker, setTicker] = useState('AAPL');
    const [ready, setReady] = useState(false);

    return (
        <TickerContext.Provider value={{ ticker, setTicker,ready,setReady }}>
            {children}
        </TickerContext.Provider>
    );
};
