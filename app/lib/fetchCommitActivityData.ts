import type { CommitActivity } from "@/app/types";

type fetchCommitActivityDataParams = {
  repoOwner: string;
  repoName: string;
};

export const fetchCommitActivityData = async ({
  repoOwner,
  repoName,
}: fetchCommitActivityDataParams): Promise<CommitActivity[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/stats/commit_activity`
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const commitActivity: CommitActivity[] = await response.json();

  return commitActivity;
};
