import type { CommitActivity } from "@/app/types";

const WEEK_DAYS = 7;

type fetchCommitActivityDataParams = {
  repoOwner: string;
  repoName: string;
};

export const fetchCommitActivityData = async ({
  repoOwner,
  repoName,
}: fetchCommitActivityDataParams): Promise<{
  commitData: number[][];
  maxCommits: number;
}> => {
  const response = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/stats/commit_activity`
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data: CommitActivity[] = await response.json();

  const dailyCommits: number[][] = Array.from({ length: WEEK_DAYS }, () => []);

  data.forEach((week) => {
    week.days.forEach((commits, index) => {
      dailyCommits[index].push(commits);
    });
  });

  const maxCommits = Math.max(...dailyCommits.flat());

  return { commitData: dailyCommits, maxCommits };
};
