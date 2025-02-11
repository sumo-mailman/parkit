import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavBarProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
  mobileMenuOpen: boolean;
}

export const Navbar = ({ setMobileMenuOpen, mobileMenuOpen }: NavBarProps) => {
  const navigation = [
    { name: "Find a parking", href: "" },
    { name: "List your parking", href: "/dashboard" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="px-6 py-6 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="text-lg font-bold text-white">
            Parkit
          </a>
        </div>
        <div className="hidden lg:flex  gap-x-12">
          <a className="text-sm font-semibold text-white" href="/dashboard">
            List your parking
          </a>
          <a className="text-sm font-semibold text-white" href="/listings">
            Find a parking
          </a>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-900 px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold text-white">
              Parkit
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400"
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
