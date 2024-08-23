"use client";
import { FC, FormEvent, useState } from "react";
import { Button } from "@/app/components";
import { useRouter } from "next/navigation";

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
        placeholder="Please enter GitHub username..."
        className="border border-gray-200 rounded-lg px-4 py-2 mb-4 text-gray-200 bg-transparent focus:outline-none w-80 max-w-full"
        required
      />
      <Button type="submit" disabled={!username}>
        Search
      </Button>
    </form>
  );
};

export default RepositorySearchForm;
