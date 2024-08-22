import { FC } from "react";
import { CommitActivity } from "@/app/types";
import { getHigherContributionsCount } from "@/app/utils";
import CommitActivityCell from "./CommitActivityCell";

type CommitActivityGraphBodyProps = {
  commitActivity: CommitActivity[];
};

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const canDisplayDay = (index: number) => index === 1 || index === 3 || index === 5;

const CommitActivityGraphBody: FC<CommitActivityGraphBodyProps> = ({ commitActivity }) => {
  const maxCommits = getHigherContributionsCount(commitActivity);

  return (
    <tbody>
      {DAYS_OF_WEEK.map((day, dayIndex) => (
        <tr key={dayIndex}>
          <td className="text-left text-xs pr-1 text-gray-200">{canDisplayDay(dayIndex) && day}</td>
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
  );
};

export default CommitActivityGraphBody;
