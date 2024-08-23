import { useState } from "react";
import { fetchRepositories } from "@/app/lib/fetchRepositories";
import { UserRepositories } from "@/app/types";

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<UserRepositories | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRepositoriesByUsername = async (username: string) => {
    setIsLoading(true);
    setError(null);
    setRepositories(null);

    try {
      const data = await fetchRepositories(username);
      setRepositories(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error fetching repositories");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    repositories,
    isLoading,
    error,
    getRepositoriesByUsername,
  };
};
