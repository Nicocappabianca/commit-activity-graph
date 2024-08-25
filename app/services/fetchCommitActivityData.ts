import type { CommitActivity } from "@/app/types";
import { HTTPStatusCode } from "@/app/constants";

type fetchCommitActivityDataParams = {
  repositoryOwner: string;
  repositoryName: string;
  retriesCount?: number;
};

export const maxDuration = 30; //expressed in seconds
const RETRY_TIME = 7000; //expressed in milliseconds
const MAX_RETRIES = 2;

const fetchCommitActivityData = async ({
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
};

export default fetchCommitActivityData;
