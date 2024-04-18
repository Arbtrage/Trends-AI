"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Search as SearchIcon } from 'lucide-react';
import { mockSearchResults } from '@/constants/mocks';
import { getTickers } from '@/lib/fetchers';
import { searchResults } from '@/constants/mocks';

type SearchResult = {
    description: string;
    displaySymbol: string;
    symbol: React.Key;
    type: string;
};


const Search = ({ setTicker }: any) => {
    const [input, setInput] = useState<string>("");
    const [results, setResults] = useState<SearchResult[]>(mockSearchResults.result.slice(0, 4));
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const { status, message } = await getTickers({ ticker: input });
                if (status === 200) {
                    setResults(message.result);
                } else {
                    throw new Error(message)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setIsLoading(false);
        };

        if (input.length > 0) {
            getData();
        }
    }, [input]);

    return (
        <div className='w-full'>
            <Autocomplete
                className="max-w-xs text-black"
                value={input}
                isLoading={isLoading}
                onInputChange={setInput}
                items={results}
                onSelectionChange={(value) => {
                    localStorage.setItem("ticker", input);
                    setTicker(value);
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
                    <AutocompleteItem key={item.displaySymbol} textValue={item.description}>
                        <div className="flex gap-2 items-center">
                            <div className="flex flex-col">
                                <span className="text-small">{item.description}</span>
                                <span className="text-tiny text-default-400">{item.displaySymbol}</span>
                            </div>
                        </div>
                    </AutocompleteItem>
                )}
            </Autocomplete>
        </div>
    );
};

export default Search;
