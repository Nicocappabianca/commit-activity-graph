"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-red-400">Oops! 😰</h2>
      <h3 className="text-lg text-gray-400 pt-2">Something went wrong.</h3>
      <button
        className="mt-6 border border-gray-200 rounded py-2 px-3 text-sm font-bold text-gray-200 hover:bg-gray-800 focus:scale-95 transition-transform"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
