import { FC, Suspense } from "react";
import { CommitActivityGraph, LoadingScreen, RepositoryHeader } from "@/app/components";
import type { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Commit Activity",
};

type CommitActivityPageProps = {
  params: { repositoryOwner: string; repositoryName: string };
};

const CommitActivityPage: FC<CommitActivityPageProps> = ({ params }) => {
  const { repositoryName, repositoryOwner } = params;

  const loadingMessage = (
    <div className="pb-6 text-center px-2">
      <h2 className="text-xl font-semibold pb-3 text-gray-400">
        Requesting repository activity...
      </h2>
      <p className="text-sm text-gray-500 max-w-full text-center">
        Wait, this might take some time.
      </p>
    </div>
  );

  return (
    <Suspense fallback={<LoadingScreen message={loadingMessage} />}>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 space-y-12">
        <RepositoryHeader repositoryName={repositoryName} repositoryOwner={repositoryOwner} />
        <CommitActivityGraph repositoryName={repositoryName} repositoryOwner={repositoryOwner} />
      </main>
    </Suspense>
  );
};

export default CommitActivityPage;
