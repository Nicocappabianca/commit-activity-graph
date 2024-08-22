import { CommitActivityGraph } from "./components";
import type { Metadata } from "next";

const REPO_OWNER = "facebook";
const REPO_NAME = "react";

export const metadata: Metadata = {
  title: "Commit Activity",
  description: `Commit activity graph from ${REPO_OWNER}/${REPO_NAME} GitHub repository.`,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <CommitActivityGraph repositoryName={REPO_NAME} repositoryOwner={REPO_OWNER} />
    </main>
  );
}
