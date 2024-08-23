export type RepositoryData = {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  };
  html_url: string;
};

export type CommitActivity = {
  total: number;
  week: number;
  days: number[];
};

export type MonthHeader = {
  label: string;
  colSpan: number;
};

export type UserRepositories = {
  total_count: number;
  incomplete_results: boolean;
  items: RepositoryData[];
};
