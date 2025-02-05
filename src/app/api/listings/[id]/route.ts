import { NextResponse } from "next/server";

import prisma from "../../../../../lib/prisma";

//{ params: { id: string } }
export async function GET(req: Request, context: any) {
  const { id } = await context.params;

  // check to see if ID is provided
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // query the database
  try {
    const listing = await prisma.listing.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!listing) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json(listing, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occured while fetching the listing" },
      { status: 500 }
    );
  }
}
