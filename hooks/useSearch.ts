import { useCallback, useEffect, useState } from "react";

export function useSearch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchQuery: string) => {
    setError(null);
    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);

      if (!response) {
        throw new Error("failed to search and fetch listing");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError("An error has occurred when searching");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, search };
}
