import { UserRepositories } from "@/app/types";
import { FC } from "react";
import RepositoryItem from "./RepositoryItem";

type RepositoriesListProps = {
  repositories: UserRepositories;
};

const RepositoriesList: FC<RepositoriesListProps> = ({ repositories }) => {
  if (!repositories.items.length) {
    return (
      <h1 className="text-center text-red-200 text-xl">
        Sorry, there are no repositories here. 😕
      </h1>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {repositories.items.map((repoData) => (
        <li key={repoData.id}>
          <RepositoryItem data={repoData} />
        </li>
      ))}
    </ul>
  );
};

export default RepositoriesList;
