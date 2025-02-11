//app/api/listings/user/:userId

import { Listing } from "@prisma/client";
import prisma from "../../../../../../lib/prisma";
import { NextResponse } from "next/server";

// params - userId
export async function GET(req: Request, context: any) {
  const { userId } = await context.params;

  // fail - if no userId is provided
  if (!userId) {
    return NextResponse.json({ error: "UserId is required" }, { status: 400 });
  }

  try {
    const listing: Listing[] = await prisma.listing.findMany({
      where: {
        ownerId: userId,
      },
    });

    if (!listing) {
      return NextResponse.json(
        {
          error: "No listings found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        listing,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: `An error has occurred while fetching the error - ${error}`,
      },
      { status: 500 },
    );
  }
}
