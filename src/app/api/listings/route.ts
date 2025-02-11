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

export async function POST(req: Request) {
  try {
    const { address, pricePerDay, image, available, ownerId } =
      await req.json();

    if (!ownerId || !address || !pricePerDay || !image || !available) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const newListing = await prisma.listing.create({
      data: {
        address,
        pricePerDay,
        image,
        available,
        ownerId,
      },
    });

    return NextResponse.json(newListing, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `An error has occured - ${error}` },
      { status: 500 },
    );
  }
}
