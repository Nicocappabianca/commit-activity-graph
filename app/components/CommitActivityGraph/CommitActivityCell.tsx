import { FC } from "react";
import {
  formatCommitMessage,
  getCommitDate,
  getCommitDensityClass,
  isAfterToday,
} from "@/app/utils";
import { CommitActivity } from "@/app/types";
import { Tooltip } from "@/app/components";

type CommitActivityCellProps = {
  weekCommits: CommitActivity;
  dayIndex: number;
  maxCommits: number;
};

const CommitActivityCell: FC<CommitActivityCellProps> = ({ weekCommits, dayIndex, maxCommits }) => {
  const commitsQty = weekCommits.days[dayIndex];
  const bgColor = getCommitDensityClass(commitsQty, maxCommits);
  const commitDate = getCommitDate(weekCommits, dayIndex);

  if (isAfterToday(commitDate)) {
    return null;
  }

  return (
    <Tooltip
      tooltip={formatCommitMessage(commitsQty, commitDate)}
      trigger={<div className={`w-5 h-5 rounded-sm cursor-pointer ${bgColor}`} />}
    />
  );
};

export default CommitActivityCell;
