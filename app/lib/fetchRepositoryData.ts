import { RepositoryData } from "@/app/types";

type fetchRepositoryDataParams = {
  repositoryOwner: string;
  repositoryName: string;
};

const ONE_HOUR = 3600;

export const fetchRepositoryData = async ({
  repositoryOwner,
  repositoryName,
}: fetchRepositoryDataParams): Promise<RepositoryData> => {
  const response = await fetch(
    `https://api.github.com/repos/${repositoryOwner}/${repositoryName}`,
    { next: { revalidate: ONE_HOUR } }
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const repositoryData: RepositoryData = await response.json();

  return repositoryData;
};
