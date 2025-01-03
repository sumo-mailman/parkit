"use client";

import type { NextPage } from "next/types";
import Image from "next/image";

const ListingPage: NextPage = () => {
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
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

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center">
        <div className="px-6 lg:px-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Discover Parking Spots
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Find the best deals available
          </p>
          <div className="mt-4">
            <a
              className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("listings");
              }}
            >
              Explore Listings →
            </a>
          </div>
        </div>
      </main>

      {/* Listings Section */}
      <section id="listings" className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Featured Listings
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Sample Listings */}
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-800 p-6 shadow hover:shadow-lg"
              >
                <Image
                  src="https://via.placeholder.com/300"
                  alt="Listing Image"
                  width={300}
                  height={200}
                  className="rounded-lg"
                ></Image>
                <h3 className="text-lg font-semibold">Listing {index + 1}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  A brief description of the listing goes here.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingPage;
