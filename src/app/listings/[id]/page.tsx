"use client";

import React from "react";
import Image from "next/image";

const Listing = () => {
  // For demo, here’s some placeholder listing data.
  const listing = {
    image: "/parking-placeholder.jpg",
    address: "123 Example Street, Melbourne",
    pricePerDay: 25,
    availability: "Weekdays Only",
    owner: "John Doe",
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="inset-x-0 top-0 z-50 p-6 lg:px-8">
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-lg font-bold">Parkit</span>
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow px-6 lg:px-8 flex flex-col justify-center">
        <div className="mx-auto max-w-7xl w-full py-10">
          <h1 className="text-3xl font-bold mb-6">Featured Listing</h1>

          {/* Content Layout: Image on the left, details on the right, 
              or you can stack them vertically on small screens */}
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
                <span className="font-semibold">Availability:</span>{" "}
                {listing.availability}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Owner:</span> {listing.owner}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Listing;
