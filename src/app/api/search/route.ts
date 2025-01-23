import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const searchQuery = searchParams.get("query");

    console.log("🔎", searchQuery);
    if (!searchQuery) {
      return NextResponse.json(
        {
          message: "Query parameter is required",
        },
        { status: 400 }
      );
    }
    const result = await prisma.listing.findMany({
      where: {
        address: {
          contains: searchQuery,
          mode: "insensitive",
        },
      },
    });

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error loading search results" },
      { status: 500 }
    );
  }
}
