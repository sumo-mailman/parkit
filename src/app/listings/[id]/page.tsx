"use client";

import React from "react";
import Image from "next/image";
import { useListing } from "../../../../hooks/useListing";
import { useParams } from "next/navigation";

const Listing = () => {
  const { id } = useParams();

  if (!id || Array.isArray(id)) {
    return <div>No valid ID provided...</div>;
  }

  const { listing, loading, error } = useListing(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !listing) {
    return <div>Error: {error || !listing}</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="flex-grow px-6 lg:px-8 flex flex-col justify-center">
        <div className="mx-auto max-w-7xl w-full py-10">
          <h1 className="text-3xl font-bold mb-6">Listing</h1>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <Image
                src={listing.image}
                alt="Listing Image"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            {/* Listing Details Section */}
            <div className="w-full md:w-1/2">
              <p className="mb-2">
                <span className="font-semibold">Address:</span>{" "}
                {listing.address}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Price per day:</span> AU$
                {listing.pricePerDay}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Available?:</span>{" "}
                {listing.available ? "true" : "false"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Owner:</span> {listing.ownerId}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Listing;
