import { FC } from "react";
import { fetchCommitActivityData } from "@/app/lib/fetchCommitActivityData";
import { getCommitDensityClass } from "@/app/utils/getCommitDensityClass";

const CommitActivityGraph: FC = async () => {
  const { commitData, maxCommits } = await fetchCommitActivityData({
    repoOwner: "facebook",
    repoName: "react",
  });

  return (
    <div className="max-w-full overflow-auto grid grid-rows-7 grid-flow-col gap-1">
      {commitData.flat().map((commits, index) => {
        const density = getCommitDensityClass(commits, maxCommits);
        return (
          <div key={index} className={`w-4 h-4 rounded ${density}`} title={`${commits} commits`} />
        );
      })}
    </div>
  );
};

export default CommitActivityGraph;
