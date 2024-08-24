import { UserRepositories } from "@/app/types";
import { HTTPStatusCode } from "@/app/constants";

export const fetchRepositories = async (repositoryOwner: string): Promise<UserRepositories> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=user:${repositoryOwner}`
  );

  if (response.status === HTTPStatusCode.UNPROCESSABLE_ENTITY) {
    throw new Error(`Username ${repositoryOwner} does not exist.`);
  }

  if (!response.ok) {
    throw new Error(`Error fetching ${repositoryOwner} repositories: ${response.statusText}`);
  }

  const repositories: UserRepositories = await response.json();

  return repositories;
};
