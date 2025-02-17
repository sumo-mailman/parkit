import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js starter",
  description: "Next.js starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html>
        <body>
          <header className="flex justify-between items-center p-4 gap-4 h-16 bg-white">
            <div>
              <a
                href="/"
                className="text-lg font-bold text-black  hover:text-blue-500"
              >
                ParkIt
              </a>
            </div>
            <div className="flex space-x-10">
              <a
                className="text-base font-bold text-black hover:text-blue-500"
                href="/search"
              >
                Search
              </a>
              <a
                className="text-base font-bold text-black hover:text-blue-500"
                href="/listings"
              >
                View All
              </a>
              <a
                className="text-base font-bold text-black hover:text-blue-500"
                href="/dashboard"
              >
                Your Listing
              </a>
            </div>

            <div>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
