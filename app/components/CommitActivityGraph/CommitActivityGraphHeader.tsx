import { FC } from "react";
import { MonthHeader } from "@/app/types";

type CommitActivityGraphHeaderProps = {
  monthHeaders: MonthHeader[];
};

const CommitActivityGraphHeader: FC<CommitActivityGraphHeaderProps> = ({ monthHeaders }) => {
  return (
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
  );
};

export default CommitActivityGraphHeader;
