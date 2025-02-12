import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigation = [
    { name: "Find a parking", href: "/listings" },
    { name: "List your parking", href: "/dashboard" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-gray-900">
      <nav
        aria-label="Global"
        className="relative mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4 lg:px-8"
      >
        {/* Left Column: Logo */}
        <div>
          <a href="#" className="text-lg font-bold text-white">
            Parkit
          </a>
        </div>

        {/* Centre Column: Desktop Nav */}
        <div className="hidden lg:flex items-center justify-center space-x-6">
          <a
            className="text-sm font-semibold text-white hover:text-gray-300"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-semibold text-white hover:text-gray-300"
            href="/listings"
          >
            Find a parking
          </a>
          <a
            className="text-sm font-semibold text-white hover:text-gray-300"
            href="/dashboard"
          >
            List your parking
          </a>
        </div>

        {/* Right Column: Mobile Menu Button */}
        <div className="flex items-center justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none lg:hidden"
          >
            {/* Tiny -> bigger icon on larger mobile devices */}
            <Bars3Icon className="h-2 w-2 sm:h-4 sm:w-4 md:h-6 md:w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* Background overlay */}
        <div className="fixed inset-0 z-50 bg-black/50" />

        {/* Panel */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-900 px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold text-white">
              Parkit
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
