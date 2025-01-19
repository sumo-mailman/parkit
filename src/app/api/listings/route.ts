// app/api/listings/route.ts

import { NextResponse } from "next/server";

import prisma from "../../../../lib/prisma";

import { Listing } from "../../../../types/listing";

export async function GET() {
  const listings: Listing[] = await prisma.listing.findMany({
    include: {
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(listings, { status: 200 });
}

// Optionally, handle other HTTP methods like POST, PUT, DELETE here
