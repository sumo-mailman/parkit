import { useCallback, useEffect, useState } from "react";
import { Listing } from "../types/listing";

export function useListings() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchListings = useCallback(async () => {
    try {
      const response = await fetch("/api/listings");

      if (!response.ok) {
        throw new Error("Failed to fetch listings");
      }

      const data = await response.json();
      setListings(data);
    } catch (err: any) {
      setError("An error has occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return { listings, error, loading };
}
