import { CommitActivity } from "@/app/types";

const getCommitDate = (weekCommits: CommitActivity, dayIndex: number): Date => {
  const commitDate = new Date(weekCommits.week * 1000);
  commitDate.setDate(commitDate.getDate() + dayIndex);
  commitDate.setHours(0, 0, 0, 0);

  return commitDate;
};

export default getCommitDate;
