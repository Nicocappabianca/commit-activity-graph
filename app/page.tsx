import type { Metadata } from "next";
import { RepositorySearchForm } from "@/app/components";

export const metadata: Metadata = {
  title: "Repository Search",
};

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-200 pb-3">Repository Search</h1>
      <p className="text-gray-400 text-lg md:text-xl pb-8">{`Let's find some repos!`}</p>
      <RepositorySearchForm />
    </main>
  );
};

export default Home;
