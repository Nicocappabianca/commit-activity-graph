import { FC, Suspense } from "react";
import { LoadingScreen, RepositoriesList } from "@/app/components";
import { capitalizeFirstLetter } from "@/app/utils";

export async function generateMetadata({ params }: RepositoriesPageProps) {
  const { repositoryOwner } = params;

  return {
    title: `${capitalizeFirstLetter(repositoryOwner)} | Repositories`,
  };
}

type RepositoriesPageProps = {
  params: { repositoryOwner: string };
};

const RepositoriesPage: FC<RepositoriesPageProps> = async ({ params }) => {
  const { repositoryOwner } = params;

  const loadingMessage = (
    <h2 className="text-xl text-gray-400 font-semibold pb-3">{`Loading ${repositoryOwner} repositories...`}</h2>
  );

  return (
    <Suspense fallback={<LoadingScreen message={loadingMessage} />}>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0 py-8">
        <h1 className="text-2xl pb-12 text-gray-200">
          <span className="font-bold">{capitalizeFirstLetter(repositoryOwner)}</span> GitHub
          Repositories
        </h1>
        <div className="container">
          <RepositoriesList username={repositoryOwner} />
        </div>
      </main>
    </Suspense>
  );
};

export default RepositoriesPage;
