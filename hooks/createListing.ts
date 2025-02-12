import { Listing } from "@prisma/client";
import { useCallback, useState } from "react";

export function createListing({ listing }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newListing, setNewListing] = useState<Listing | null>(null);

  const createListing = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("api/listings", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(listing),
      });
      if (!response.ok) {
        throw new Error("Failed to create a new listing");
      }

      const data = await response.json();

      setNewListing(data);

      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createListing, newListing, loading, error };
}
