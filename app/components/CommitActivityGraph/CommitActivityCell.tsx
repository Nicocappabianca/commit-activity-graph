import { FC } from "react";
import { getCommitDensityClass } from "@/app/utils/getCommitDensityClass";
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

  return (
    <Tooltip
      tooltip={commitsQty > 0 ? `${commitsQty} contributions.` : "No contributions."}
      trigger={<div className={`with-tooltip w-4 h-4 rounded-sm cursor-pointer ${bgColor}`} />}
    />
  );
};

export default CommitActivityCell;
