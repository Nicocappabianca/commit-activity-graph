"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

const Portal: FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const mount = document.getElementById("tooltip-root");
  if (!mount) return null;

  return createPortal(children, mount);
};

export default Portal;
