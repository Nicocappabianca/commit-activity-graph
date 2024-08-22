"use client";
import { FC, ReactNode, useState, useRef, useEffect } from "react";
import { Portal } from "@/app/components";

type TooltipProps = {
  trigger: ReactNode;
  tooltip: ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ trigger, tooltip }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY - 25,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={triggerRef}
      className="group cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {trigger}
      {isVisible && (
        <Portal>
          <span
            className="rounded shadow-lg py-1 px-2 bg-gray-500 text-xs text-gray-50 absolute z-50 transform -translate-x-1/2 text-nowrap"
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            {tooltip}
          </span>
        </Portal>
      )}
    </div>
  );
};

export default Tooltip;
