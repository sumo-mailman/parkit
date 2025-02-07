import { useCallback, useState } from "react";

export function useSearch() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (searchQuery: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(searchQuery)}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Failed to search and fetch listing",
        );
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (error: any) {
      console.error("Search Error:", error);
      setError(error.message || "An error occurred during the search");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, search };
}
