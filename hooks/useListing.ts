import { Listing } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

export function useListing(id: string) {
  const [listing, setListing] = useState<Listing>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchListing = useCallback(async () => {
    try {
      // call the API
      const response = await fetch(`/api/listings/${id}`);

      // fail: check to see if response is provided
      if (!response) {
        throw new Error("failed to fetch listing");
      }

      // success: assign response to listing state
      const data = await response.json();
      setListing(data);
    } catch (err) {
      // set error
      setError("An error has occurred");
    } finally {
      // set loading
      setLoading(false);
    }
  }, []);

  // useEffect to only be called when the component mounts
  // depednency array ensureas it's only re-run if function reference changes
  useEffect(() => {
    fetchListing();
  }, [fetchListing, id]);

  return { listing, error, loading };
}
