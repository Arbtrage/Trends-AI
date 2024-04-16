import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

async function getHistory(id: string) {
    const response=await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo")
    return response.data;
}

export const GET = async (
    request: NextRequest,
    { params }: { params: { id: string } }
) => {
    const issue = await getHistory(params.id);
    return NextResponse.json(issue);
};