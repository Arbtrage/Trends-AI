export const mockSearchResults = {
    count: 4,
    result: [
      {
        description: "APPLE INC",
        displaySymbol: "AAPL",
        symbol: "AAPL",
        type: "Common Stock",
      },
      {
        description: "APPLE INC",
        displaySymbol: "AAPL.SW",
        symbol: "AAPL.SW",
        type: "Common Stock",
      },
      {
        description: "APPLE INC",
        displaySymbol: "APC.BE",
        symbol: "APC.BE",
        type: "Common Stock",
      },
      {
        description: "APPLE INC",
        displaySymbol: "APC.DE",
        symbol: "APC.DE",
        type: "Common Stock",
      },
      {
        description: "GOOGLE INC",
        displaySymbol: "Google.DE",
        symbol: "Google.DE",
        type: "Common Stock",
      },
    ],
  };
  

  export const searchResults={
    "bestMatches": [
        {
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273"
        },
        {
            "1. symbol": "TSCDF",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TSCDY",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO2.FRK",
            "2. name": "TESCO PLC ADR/1 LS-05",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        },
        {
            "1. symbol": "TCO0.FRK",
            "2. name": "TESCO PLC LS-0633333",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        }
    ]
}
  export const mockCompanyDetails = {
    country: "US",
    currency: "USD",
    exchange: "NASDAQ/NMS (GLOBAL MARKET)",
    ipo: "1980-12-12",
    marketCapitalization: 1415993,
    name: "Apple Inc",
    phone: "14089961010",
    shareOutstanding: 4375.47998046875,
    ticker: "AAPL",
    weburl: "https://www.apple.com/",
    logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    finnhubIndustry: "Technology",
  };
  
  export const mockStockQuote = {
    c: 261.74,
    h: 263.31,
    l: 260.68,
    o: 261.07,
    pc: 259.45,
    t: 1582641000,
  };
  
  export const mockHistoricalData = {
    c: [217.68, 221.03, 219.89],
    h: [222.49, 221.5, 220.94],
    l: [217.19, 217.1402, 218.83],
    o: [221.03, 218.55, 220],
    s: "ok",
    t: [1569297600, 1569384000, 1569470400],
    v: [33463820, 24018876, 20730608],
};
  


export const animals = [
  {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
  {label: "Dog", value: "dog", description: "The most popular pet in the world"},
  {label: "Elephant", value: "elephant", description: "The largest land animal"},
  {label: "Lion", value: "lion", description: "The king of the jungle"},
  {label: "Tiger", value: "tiger", description: "The largest cat species"},
  {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
  {label: "Zebra", value: "zebra", description: "A several species of African equids"},
  {
    label: "Shark",
    value: "shark",
    description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
  {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
];
