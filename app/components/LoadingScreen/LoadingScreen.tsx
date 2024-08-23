import { FC } from "react";
import { LoadingSpinner } from "@/app/components";

type LoadingMessageProps = {
  message: string;
};

const LoadingMessage: FC<LoadingMessageProps> = ({ message }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl text-gray-400 font-semibold pb-6">{message}</h2>
      <LoadingSpinner />
    </div>
  );
};

export default LoadingMessage;
