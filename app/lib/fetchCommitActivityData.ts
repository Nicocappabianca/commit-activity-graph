import type { CommitActivity } from "@/app/types";

type fetchCommitActivityDataParams = {
  repositoryOwner: string;
  repositoryName: string;
};

const FIVE_SECONDS = 5000; //expressed in milliseconds

export const fetchCommitActivityData = async ({
  repositoryOwner,
  repositoryName,
}: fetchCommitActivityDataParams): Promise<CommitActivity[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/stats/commit_activity`
  );

  if (response.status === 202) {
    console.warn("Stats are being generated, retrying...");
    await new Promise((resolve) => setTimeout(resolve, FIVE_SECONDS));
    return fetchCommitActivityData({ repositoryOwner, repositoryName });
  }

  if (!response.ok) {
    throw new Error(`Error fetching commit activity: ${response.statusText}`);
  }

  const commitActivity: CommitActivity[] = await response.json();

  return commitActivity;
};
