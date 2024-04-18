import { getOverview } from "@/lib/fetchers";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { ticker: string } }
) => {
    const issue = await getOverview({ ticker:params.ticker });

  return NextResponse.json(issue);
};