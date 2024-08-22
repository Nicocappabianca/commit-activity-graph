import { FC } from "react";
import { CommitActivity } from "@/app/types";
import { getMonthHeaders } from "@/app/utils";

type CommitActivityGraphHeaderProps = {
  commitActivity: CommitActivity[];
};

const CommitActivityGraphHeader: FC<CommitActivityGraphHeaderProps> = ({ commitActivity }) => {
  const monthHeaders = getMonthHeaders(commitActivity);

  return (
    <thead>
      <tr>
        <th></th>
        {monthHeaders.map((month, index) => (
          <th
            key={index}
            colSpan={month.colSpan}
            className="text-left text-xs font-normal text-gray-200 relative"
          >
            <span className="absolute -top-3">{month.label}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CommitActivityGraphHeader;
