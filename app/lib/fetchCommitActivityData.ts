import type { CommitActivity } from "@/app/types";

type fetchCommitActivityDataParams = {
  repositoryOwner: string;
  repositoryName: string;
};

const ONE_HOUR = 3600; //expressed in seconds
const FIVE_SECONDS = 10000; //expressed in milliseconds

export const fetchCommitActivityData = async ({
  repositoryOwner,
  repositoryName,
}: fetchCommitActivityDataParams): Promise<CommitActivity[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/stats/commit_activity`,
    { next: { revalidate: ONE_HOUR } }
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
