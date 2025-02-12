"use client";

import React from "react";
import { useListings } from "../../../hooks/getListings";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { listings, loading } = useListings();
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}

        <h1 className="text-3xl font-bold text-white mb-6">Your Listings</h1>

        {/* Create Listing Button */}
        <button
          className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-5 py-2 rounded-lg mb-6 transition"
          onClick={() => router.push("/dashboard/new")}
        >
          + Create New Listing
        </button>

        {/* Listings Grid */}
        {loading ? (
          <p className="text-gray-300">Loading...</p>
        ) : listings.length === 0 ? (
          <p className="text-gray-300">No listings found. Create one!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col h-full"
              >
                {/* Image */}
                <img
                  src={listing.image || "/placeholder.jpg"}
                  alt={listing.address}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />

                {/* Address & Price */}
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-white break-words">
                    {listing.address}
                  </h2>
                  <p className="text-sm text-gray-400">
                    Price: ${listing.pricePerDay}/day
                  </p>
                </div>

                {/* Edit Button at Bottom */}
                <button
                  className="mt-auto w-full bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md transition"
                  onClick={() => router.push(`/dashboard/edit/${listing.id}`)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
