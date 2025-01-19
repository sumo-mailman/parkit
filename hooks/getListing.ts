import { useState, useEffect } from "react";

export function getListing(id: string | undefined | string[]) {
  const [listing, setListing] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchListing() {
      if (!id) {
        setError("ID is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`/api/listings/${id}`);

        if (!response.ok) {
          const { error } = await response.json();
          throw new Error(error || "Failed to fetch listing");
        }

        const data = await response.json();
        setListing(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchListing();
  }, [id]);

  return { listing, loading, error };
}
