import type { CommitActivity } from "@/app/types";

type fetchCommitActivityDataParams = {
  repositoryOwner: string;
  repositoryName: string;
};

const ONE_HOUR = 3600;

export const fetchCommitActivityData = async ({
  repositoryOwner,
  repositoryName,
}: fetchCommitActivityDataParams): Promise<CommitActivity[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/stats/commit_activity`,
    { next: { revalidate: ONE_HOUR } }
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const commitActivity: CommitActivity[] = await response.json();

  return commitActivity;
};
