"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearch } from "../../hooks/useSearch";
import { Listing } from "@prisma/client";
import Link from "next/link";

const navigation = [
  { name: "Listings", href: "/listings" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Home: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Listing[]>([]);

  const { search } = useSearch();

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
      {/* Decorative Background Elements */}
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

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-lg font-bold text-white">Parkit</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Sign In <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-lg font-bold text-white">MyCompany</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Main Content */}
      <div className="relative flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Search for an Address
          </h1>
          <div className="mt-8 relative">
            {/* Input & Button */}
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter an address..."
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
              <button
                onClick={handleSearch}
                className="ml-4 rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Search
              </button>
            </div>

            {/* Dropdown Results */}
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
