"use client"

import React, { useState, useEffect, useContext } from 'react';
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Search as SearchIcon } from 'lucide-react';
import { mockSearchResults } from '@/constants/mocks';
import { getTickers } from '@/lib/fetchers';
import { searchResults } from '@/constants/mocks';
import { useTicker } from '@/context/TickerContext';

interface SearchResult {
    '1. symbol': string;
    '2. name': string;
    '3. type': string;
    '4. region': string;
    '5. marketOpen': string;
    '6. marketClose': string;
    '7. timezone': string;
    '8. currency': string;
    '9. matchScore': string;
}

const Search = () => {

    // let { ticker}=useContext()
    const { ticker, setTicker,setReady } = useTicker();
    const [input, setInput] = useState<string>(ticker);
    const [results, setResults] = useState<SearchResult[]>(searchResults.bestMatches);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(true);
    const [value, setValue] = useState<string>(ticker);

    const handleChange = (e:string) => {
        setInput(e)
        // setTicker(e)
        setIsSelected(false)
    }

    const setTickerValue = (tickerValue:any) => {
        setValue(tickerValue)
        setTicker(tickerValue)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (!isSelected && input && input.length > 2 ) {
                const getData = async () => {
                    setIsLoading(true);
                    console.log("API call started");
                    try {
                        console.log(input);
                        const { status, message } = await getTickers({ ticker: input });
                        if (status === 200) {
                            setResults(message.bestMatches);
                        } else {
                            throw new Error(message);
                        }
                    } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                    setIsLoading(false);
                    setIsSelected(true);
                };
                getData();
            }
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [input,isSelected]);

    return (
        <div className='w-full'>
             <Autocomplete
                className="max-w-xs text-black"
                value={input}
                isLoading={isLoading}
                onInputChange={(e: string) => handleChange(e)}
                selectedKey={value}
                items={results}
                onSelectionChange={(value) => {
                    setTickerValue(value);
                }}
                aria-label="Select a stock"
                placeholder="Search for any stock"
                popoverProps={{
                    offset: 10,
                    classNames: {
                        base: "rounded-large",
                        content: "p-1 border-small border-default-100 bg-background",
                    },
                }}
                startContent={<SearchIcon className="text-default-400" strokeWidth={2.5} size={20} />}
                variant="bordered"
            >
                {item => (
                    <AutocompleteItem key={item['1. symbol']} textValue={item['1. symbol']}>
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-small">{item['2. name']}</span>
                                <span className="text-tiny text-default-400">{item['1. symbol']}</span>
                            </div>
                        </div>
                    </AutocompleteItem>
                )}
            </Autocomplete>
        </div>
    );
};

export default Search;
