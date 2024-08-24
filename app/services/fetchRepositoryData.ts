import { RepositoryData } from "@/app/types";

type fetchRepositoryDataParams = {
  repositoryOwner: string;
  repositoryName: string;
};

const fetchRepositoryData = async ({
  repositoryOwner,
  repositoryName,
}: fetchRepositoryDataParams): Promise<RepositoryData> => {
  const response = await fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}`);

  if (!response.ok) {
    throw new Error(`Error fetching repository data: ${response.statusText}`);
  }

  const repositoryData: RepositoryData = await response.json();

  return repositoryData;
};

export default fetchRepositoryData;
