"use client";
import { FC } from "react";
import { getYearContributionsCount } from "@/app/utils";
import { useCommitActivity } from "@/app/hooks";
import { ErrorScreen, LoadingScreen, RepositoryHeader } from "@/app/components";
import CommitActivityGraphHeader from "./CommitActivityGraphHeader";
import CommitScale from "./CommitScale";
import CommitActivityGraphBody from "./CommitActivityGraphBody";

type CommitActivityGraphProps = {
  repositoryOwner: string;
  repositoryName: string;
};

const CommitActivityGraph: FC<CommitActivityGraphProps> = ({ repositoryName, repositoryOwner }) => {
  const {
    isLoading,
    error,
    data: commitActivity,
  } = useCommitActivity({ repositoryName, repositoryOwner });

  if (isLoading) {
    const loadingMessage = (
      <div className="pb-6 text-center px-2">
        <h2 className="text-xl font-semibold pb-3 text-gray-400">
          Requesting repository activity...
        </h2>
        <p className="text-sm text-gray-500 max-w-full text-center">
          Wait, this might take some time.
        </p>
      </div>
    );

    return <LoadingScreen message={loadingMessage} />;
  }

  if (!commitActivity || error) {
    return <ErrorScreen />;
  }

  const totalYearCommits = getYearContributionsCount(commitActivity);

  return (
    <>
      <RepositoryHeader repositoryName={repositoryName} repositoryOwner={repositoryOwner} />
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
    </>
  );
};

export default CommitActivityGraph;
