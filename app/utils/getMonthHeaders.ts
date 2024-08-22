import { CommitActivity, MonthHeader } from "@/app/types";

const getMonthHeaders = (commitActivity: CommitActivity[]): MonthHeader[] => {
  const monthHeaders: MonthHeader[] = [];
  let currentMonth = new Date(commitActivity[commitActivity.length - 1].week * 1000).getMonth();
  let colSpan = 0;

  commitActivity.forEach((weekCommits, index) => {
    const date = new Date(weekCommits.week * 1000);
    const month = date.getMonth();

    if (month !== currentMonth) {
      monthHeaders.push({
        label: new Date(commitActivity[index - colSpan].week * 1000).toLocaleString("default", {
          month: "short",
        }),
        colSpan,
      });
      currentMonth = month;
      colSpan = 1;
    } else {
      colSpan++;
    }
  });

  monthHeaders.push({
    label: new Date(commitActivity[commitActivity.length - colSpan].week * 1000).toLocaleString(
      "default",
      { month: "short" }
    ),
    colSpan,
  });

  return monthHeaders;
};

export default getMonthHeaders;
