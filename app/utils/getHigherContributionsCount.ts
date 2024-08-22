import { CommitActivity } from "@/app/types";

const getHigherContributionsCount = (commitActivity: CommitActivity[]): number => {
  return Math.max(...commitActivity.flatMap((week) => week.days));
};

export default getHigherContributionsCount;
