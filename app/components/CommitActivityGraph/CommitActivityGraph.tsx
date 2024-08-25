import { FC } from "react";
import { getYearContributionsCount } from "@/app/utils";
import { fetchCommitActivityData } from "@/app/services";
import CommitActivityGraphHeader from "./CommitActivityGraphHeader";
import CommitScale from "./CommitScale";
import CommitActivityGraphBody from "./CommitActivityGraphBody";

type CommitActivityGraphProps = {
  repositoryOwner: string;
  repositoryName: string;
};

const CommitActivityGraph: FC<CommitActivityGraphProps> = async ({
  repositoryName,
  repositoryOwner,
}) => {
  const commitActivity = await fetchCommitActivityData({
    repositoryName,
    repositoryOwner,
  });

  const totalYearCommits = getYearContributionsCount(commitActivity);

  return (
    <div className="flex flex-col items-center w-full max-w-[92rem]">
      <h2 className="mr-auto mb-3 text-gray-200">
        {totalYearCommits} contributions in the last year
      </h2>
      <div className="max-w-full overflow-y-hidden overflow-x-auto">
        <table className="table-auto border-separate w-max overflow-hidden relative pt-6 pb-2">
          <CommitActivityGraphHeader commitActivity={commitActivity} />
          <CommitActivityGraphBody commitActivity={commitActivity} />
        </table>
      </div>
      <div className="ml-auto pt-3">
        <CommitScale />
      </div>
    </div>
  );
};

export default CommitActivityGraph;
