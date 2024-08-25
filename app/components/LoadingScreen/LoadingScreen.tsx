import { FC, ReactNode } from "react";
import { LoadingSpinner } from "@/app/components";

type LoadingMessageProps = {
  message: ReactNode;
};

const LoadingMessage: FC<LoadingMessageProps> = ({ message }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      {message}
      <LoadingSpinner />
    </div>
  );
};

export default LoadingMessage;
