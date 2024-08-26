import { useState, useEffect, useCallback } from "react";
import type { CommitActivity } from "@/app/types";
import { HTTPStatusCode } from "@/app/constants";

type fetchCommitActivityDataParams = {
  repositoryOwner: string;
  repositoryName: string;
  retriesCount?: number;
};

type useCommitActivityParams = Omit<fetchCommitActivityDataParams, "retriesCount">;

const RETRY_TIME = 15000; // expressed in milliseconds
const MAX_RETRIES = 5;

const useCommitActivity = ({ repositoryOwner, repositoryName }: useCommitActivityParams) => {
  const [data, setData] = useState<CommitActivity[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCommitActivityData = useCallback(
    async ({
      repositoryOwner,
      repositoryName,
      retriesCount = 0,
    }: fetchCommitActivityDataParams): Promise<CommitActivity[]> => {
      const response = await fetch(
        `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/stats/commit_activity`
      );

      const canRetry = retriesCount < MAX_RETRIES;

      if (response.status === HTTPStatusCode.ACCEPTED) {
        if (!canRetry) {
          throw new Error(`Retry request limit exceeded`);
        }

        console.warn("Stats are being generated, retrying...");
        await new Promise((resolve) => setTimeout(resolve, RETRY_TIME));
        return fetchCommitActivityData({
          repositoryOwner,
          repositoryName,
          retriesCount: retriesCount + 1,
        });
      }

      if (!response.ok) {
        throw new Error(`Error fetching commit activity: ${response.statusText}`);
      }

      const commitActivity: CommitActivity[] = await response.json();

      return commitActivity;
    },
    []
  );

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();
  }, [repositoryOwner, repositoryName, fetchCommitActivityData]);

  return { data, isLoading, error };
};

export default useCommitActivity;
