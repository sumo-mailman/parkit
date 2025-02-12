import { NextResponse } from "next/server";

import prisma from "../../../../../lib/prisma";

//{ params: { id: string } }
export async function GET(req: Request, context: any) {
  const { listingId } = await context.params;

  // check to see if ID is provided
  if (!listingId) {
    return NextResponse.json(
      { error: "listingId is required" },
      { status: 400 },
    );
  }

  // query the database
  try {
    const listing = await prisma.listing.findUnique({
      where: {
        id: parseInt(listingId, 10),
      },
    });

    if (!listing) {
      return NextResponse.json({ error: "Listing not found" }, { status: 404 });
    }

    return NextResponse.json(listing, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occured while fetching the listing" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request, context: any) {
  const { listingId } = await context.params;

  if (!listingId) {
    return NextResponse.json(
      { error: "listingId is required" },
      { status: 400 },
    );
  }

  try {
    const body = await req.json();

    const updatedListing = await prisma.listing.update({
      where: {
        id: parseInt(listingId, 10),
      },
      data: {
        address: body.address,
        pricePerDay: body.pricePerDay,
        image: body.image,
        available: body.available,
      },
    });
    return NextResponse.json(updatedListing, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to update listing` },
      {
        status: 500,
      },
    );
  }
}
