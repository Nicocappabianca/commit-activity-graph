import { CommitActivity } from "@/app/types";

const getYearContributionsCount = (commitActivity: CommitActivity[]): number => {
  return commitActivity.reduce((acc, week) => acc + week.total, 0);
};

export default getYearContributionsCount;
