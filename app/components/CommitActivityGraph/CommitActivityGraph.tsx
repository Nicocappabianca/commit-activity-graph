import { FC } from "react";
import { getHigherContributionsCount, getMonthHeaders } from "@/app/utils";
import { fetchCommitActivityData } from "@/app/lib/fetchCommitActivityData";
import CommitActivityCell from "./CommitActivityCell";

const REPO_OWNER = "facebook";
const REPO_NAME = "react";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const canDisplayDay = (index: number) => index === 1 || index === 3 || index === 5;

const CommitActivityGraph: FC = async () => {
  const commitActivity = await fetchCommitActivityData({
    repoOwner: REPO_OWNER,
    repoName: REPO_NAME,
  });

  const maxCommits = getHigherContributionsCount(commitActivity);
  const monthHeaders = getMonthHeaders(commitActivity);

  return (
    <div className="max-w-full overflow-y-hidden overflow-x-auto">
      <table className="table-auto border-separate w-max overflow-hidden relative pt-6">
        <thead>
          <tr>
            <th></th>
            {monthHeaders.map((month, index) => (
              <th
                key={index}
                colSpan={month.colSpan}
                className="text-left text-xs font-normal text-gray-300 relative"
              >
                <span className="absolute -top-3">{month.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DAYS_OF_WEEK.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td className="text-left text-xs pr-1 text-gray-300">
                {canDisplayDay(dayIndex) && day}
              </td>
              {commitActivity.map((weekCommits) => (
                <td key={weekCommits.week} className="p-[2.5px]">
                  <CommitActivityCell
                    weekCommits={weekCommits}
                    dayIndex={dayIndex}
                    maxCommits={maxCommits}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommitActivityGraph;
