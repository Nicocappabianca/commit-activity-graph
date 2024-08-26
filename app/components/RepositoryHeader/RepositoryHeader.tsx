import { FC } from "react";
import { fetchRepositoryData } from "@/app/services";
import Image from "next/image";

type RepositoryHeaderProps = {
  repositoryOwner: string;
  repositoryName: string;
  className?: string;
};

const RepositoryHeader: FC<RepositoryHeaderProps> = async ({ repositoryName, repositoryOwner }) => {
  const repositoryData = await fetchRepositoryData({
    repositoryName,
    repositoryOwner,
  });

  return (
    <header className="flex space-x-3 items-center">
      <Image
        src={repositoryData.owner.avatar_url}
        width={50}
        height={50}
        alt="Picture of the author"
        className="rounded-full shadow shadow-gray-400/50"
      />
      <div>
        <h1 className="text-md md:text-lg font-bold text-gray-200 ">Commit Activity Graph</h1>
        <p className="text-gray-400 text-sm md:text-base">
          from
          <a
            href={repositoryData.html_url}
            target="_blank"
            rel="noopener"
            className="text-blue-700 mx-2 font-semibold hover:text-blue-600"
          >
            {repositoryData.full_name}
          </a>
          GitHub repository.
        </p>
      </div>
    </header>
  );
};

export default RepositoryHeader;
