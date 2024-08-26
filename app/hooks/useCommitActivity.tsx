import { useState, useEffect, useCallback } from "react";
import type { CommitActivity } from "@/app/types";
import { fetchCommitActivityData } from "@/app/services";

type useCommitActivityParams = {
  repositoryOwner: string;
  repositoryName: string;
};

const useCommitActivity = ({ repositoryOwner, repositoryName }: useCommitActivityParams) => {
  const [data, setData] = useState<CommitActivity[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const commitActivity = await fetchCommitActivityData({
        repositoryOwner,
        repositoryName,
      });
      setData(commitActivity);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [repositoryOwner, repositoryName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useCommitActivity;
