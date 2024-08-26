import { FC, Suspense } from "react";
import { CommitActivityGraph, RepositoryHeader } from "@/app/components";
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

  return (
    <Suspense>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 space-y-12">
        <RepositoryHeader repositoryName={repositoryName} repositoryOwner={repositoryOwner} />
        <CommitActivityGraph repositoryName={repositoryName} repositoryOwner={repositoryOwner} />
      </main>
    </Suspense>
  );
};

export default CommitActivityPage;
