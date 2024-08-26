"use client";
import { FC } from "react";
import { Button } from "@/app/components";
import { useRouter } from "next/navigation";

type ErrorScreenProps = {
  message?: string;
  canTryAgain?: boolean;
};

const ErrorScreen: FC<ErrorScreenProps> = ({ message, canTryAgain }) => {
  const router = useRouter();

  const navigateHome = () => {
    router.push("/");
  };

  const refresh = () => {
    location.reload();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-red-400">Oops! 😰</h2>
      <h3 className="text-lg text-gray-200 pt-2 font-semibold">Something went wrong.</h3>
      {message && <p className="text-sm text-center text-gray-400 pt-2">{message}</p>}
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2 mt-4">
        <Button onClick={navigateHome}>Go back Home 🏠</Button>
        {canTryAgain && <Button onClick={refresh}>Try again 🔄</Button>}
      </div>
    </div>
  );
};

export default ErrorScreen;
