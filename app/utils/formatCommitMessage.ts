const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  const suffixes: { [key: number]: string } = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  return suffixes[day % 10] || "th";
};

const formatCommitMessage = (commitsQty: number, date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const formattedDate = `${month} ${day}${getDaySuffix(day)}`;

  if (commitsQty > 0) {
    return `${commitsQty} contributions on ${formattedDate}.`;
  } else {
    return `No contributions on ${formattedDate}.`;
  }
};

export default formatCommitMessage;
