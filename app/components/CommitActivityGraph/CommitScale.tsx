import { FC } from "react";

const CommitScale: FC = () => {
  return (
    <div className="flex items-center text-xs text-gray-400 space-x-2">
      <p>Less</p>
      <div className="w-5 h-5 rounded-sm bg-commit-no-commits" />
      <div className="w-5 h-5 rounded-sm bg-commit-low-density" />
      <div className="w-5 h-5 rounded-sm bg-commit-medium-density" />
      <div className="w-5 h-5 rounded-sm bg-commit-medium-high-density" />
      <div className="w-5 h-5 rounded-sm bg-commit-high-density" />
      <p>More</p>
    </div>
  );
};

export default CommitScale;
