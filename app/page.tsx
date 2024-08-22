import { CommitActivityGraph } from "./components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commit Activity",
  description: "Commit activity graph",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <CommitActivityGraph />
    </main>
  );
}
