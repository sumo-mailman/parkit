"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next/types";

import { useSearch } from "../../hooks/useSearch";
import { Listing } from "@prisma/client";

import { useUser } from "@clerk/clerk-react";

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Listing[]>([]);

  const { search } = useSearch();

  const { user } = useUser();
  console.log(user);
  const handleSearch = async () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);

      try {
        const result = await search(searchQuery);
        setData(result);
      } catch (error) {
        console.log("Search failed:", error);
      }
    }
  };

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          style={{
            clipPath:
              "polygon(74% 44%, 100% 61%, 97% 27%, 85% 0%, 81% 2%, 73% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 77%, 0% 65%, 18% 100%, 28% 77%, 76% 98%, 74% 44%)",
          }}
          className="relative h-[30rem] w-[60rem] bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 opacity-20"
        />
      </div>
      <div
        className="absolute bottom-0 right-1/3 translate-x-1/3 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          style={{
            clipPath:
              "polygon(74% 44%, 100% 61%, 97% 27%, 85% 0%, 81% 2%, 73% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 77%, 0% 65%, 18% 100%, 28% 77%, 76% 98%, 74% 44%)",
          }}
          className="relative h-[30rem] w-[60rem] bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 opacity-20"
        />
      </div>

      <div className="relative flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Search for a Parking Spot
          </h1>
          <div className="mt-8 relative">
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter an address... e.g: street, parade"
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
              <button
                onClick={handleSearch}
                className="ml-4 rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Search
              </button>
            </div>

            {data?.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto rounded-md border border-gray-700 bg-gray-900 shadow-lg">
                <ul className="py-2">
                  {data.map((point) => (
                    <li
                      key={point.id}
                      className="px-4 py-2 text-left text-white hover:bg-gray-700 cursor-pointer"
                    >
                      <a href={`listings/${point.id}`}>{point.address}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
