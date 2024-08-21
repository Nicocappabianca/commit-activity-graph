import type { CommitActivity } from "@/app/types";

type fetchCommitActivityDataParams = {
  repoOwner: string;
  repoName: string;
};

export const fetchCommitActivityData = async ({
  repoOwner,
  repoName,
}: fetchCommitActivityDataParams): Promise<{
  commitActivity: CommitActivity[];
  maxCommits: number;
}> => {
  const response = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/stats/commit_activity`
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const commitActivity: CommitActivity[] = await response.json();

  const maxCommits = Math.max(...commitActivity.flatMap((week) => week.days));

  return { commitActivity, maxCommits };
};
