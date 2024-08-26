"use client";
import { FC, FormEvent, useState } from "react";
import { Button } from "@/app/components";
import { useRouter } from "next/navigation";
import Link from "next/link";

const QUICK_EXAMPLE_URL = "/facebook/react";

const RepositorySearchForm: FC = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username) {
      const repositoryOwner = username.toLocaleLowerCase();
      router.push(`/${repositoryOwner}`);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Please enter GitHub repo owner..."
        className="border border-gray-200 rounded-lg px-4 py-2 mb-4 text-gray-200 bg-transparent focus:outline-none w-80 max-w-full"
        required
      />
      <div className="flex flex-col items-center">
        <Button type="submit" disabled={!username}>
          Search
        </Button>
        <div className="inline-flex items-center justify-center w-full text-gray-400">
          <hr className="w-28 h-px my-8 bg-gray-800 border-0" />
          <span className="absolute px-3 font-medium -translate-x-1/2 bg-black left-1/2 text-sm">
            or
          </span>
        </div>
        <Link
          className="text-gray-400 hover:text-gray-200 text-sm drop-shadow-lg"
          href={QUICK_EXAMPLE_URL}
        >
          Check a Quick Example 🚀
        </Link>
      </div>
    </form>
  );
};

export default RepositorySearchForm;
