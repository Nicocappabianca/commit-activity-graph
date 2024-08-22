import { CommitActivity } from "@/app/types";

export const getHigherContributionsCount = (commitActivity: CommitActivity[]): number => {
  return Math.max(...commitActivity.flatMap((week) => week.days));
};
