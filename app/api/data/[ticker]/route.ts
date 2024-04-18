import { getHistoricalData } from "@/lib/fetchers";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { ticker: string } }
) => {
    console.log("Data fetching time")
    const issue = await getHistoricalData({ ticker:params.ticker });

  return NextResponse.json(issue);
};