import { FC } from "react";
import { getCommitDensityClass } from "@/app/utils/getCommitDensityClass";

type CommitActivityCellProps = {
  weekCommits: number[];
  dayIndex: number;
  maxCommits: number;
};

const CommitActivityCell: FC<CommitActivityCellProps> = ({ weekCommits, dayIndex, maxCommits }) => {
  const commitsQty = weekCommits[dayIndex];
  const bgColor = getCommitDensityClass(commitsQty, maxCommits);

  return <div className={`w-4 h-4 rounded-sm ${bgColor}`} />;
};

export default CommitActivityCell;
