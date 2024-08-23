"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
  };

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-red-400">Oops! 😰</h2>
      <h3 className="text-lg text-gray-200 pt-2 font-semibold">Something went wrong.</h3>
      <p className="pt-6 pb-4 text-gray-400">{error.message}</p>
      <Button onClick={navigateHome}>Go back Home 🏠</Button>
    </div>
  );
}
