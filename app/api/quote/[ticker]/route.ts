import {getQuote} from "@/lib/fetchers";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { ticker: string } }
) => {
    const issue = await getQuote({ ticker:params.ticker });

  return NextResponse.json(issue);
};