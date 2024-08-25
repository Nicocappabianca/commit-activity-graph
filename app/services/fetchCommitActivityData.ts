import type { CommitActivity } from "@/app/types";
import { HTTPStatusCode } from "@/app/constants";

type fetchCommitActivityDataParams = {
  repositoryOwner: string;
  repositoryName: string;
};

export const maxDuration = 30; //expressed in seconds
const RETRY_TIME = 15000; //expressed in milliseconds

const fetchCommitActivityData = async ({
  repositoryOwner,
  repositoryName,
}: fetchCommitActivityDataParams): Promise<CommitActivity[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/stats/commit_activity`
  );

  if (response.status === HTTPStatusCode.ACCEPTED) {
    console.warn("Stats are being generated, retrying...");
    await new Promise((resolve) => setTimeout(resolve, RETRY_TIME));
    return fetchCommitActivityData({ repositoryOwner, repositoryName });
  }

  if (!response.ok) {
    throw new Error(`Error fetching commit activity: ${response.statusText}`);
  }

  const commitActivity: CommitActivity[] = await response.json();

  return commitActivity;
};

export default fetchCommitActivityData;
