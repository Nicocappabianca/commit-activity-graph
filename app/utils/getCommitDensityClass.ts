const getCommitDensityClass = (commits: number, maxCommits: number): string => {
  const quarter = maxCommits / 4;

  if (commits === 0) return "bg-commit-no-commits";
  if (commits <= quarter) return "bg-commit-low-density";
  if (commits <= quarter * 2) return "bg-commit-medium-density";
  if (commits <= quarter * 3) return "bg-commit-medium-high-density";
  return "bg-commit-high-density";
};

export default getCommitDensityClass;
