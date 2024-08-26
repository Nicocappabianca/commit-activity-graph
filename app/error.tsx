"use client";
import { useEffect } from "react";
import { ErrorScreen } from "@/app/components";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return <ErrorScreen />;
}
