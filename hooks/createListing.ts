import { Listing } from "@prisma/client";
import { useCallback, useState } from "react";
import { NewListingForm } from "../types/newListingForm";

export function useCreateListing() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newListing, setNewListing] = useState<Listing | null>(null);

  const createListing = useCallback(async (listing: NewListingForm) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(listing),
      });
      if (!response.ok) {
        console.log("this is the response", response);
        throw new Error("Failed to create a new listing");
      }

      const data = await response.json();

      setNewListing(data);

      return data;
    } catch (error) {
      setError("An error has occurred");
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createListing, newListing, loading, error };
}
