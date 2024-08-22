import { FC, ReactNode } from "react";

type TooltipProps = {
  trigger: ReactNode;
  tooltip: ReactNode;
};

const Tooltip: FC<TooltipProps> = ({ trigger, tooltip }) => {
  return (
    <div className="with-tooltip cursor-pointer">
      {trigger}
      <span className="tooltip rounded shadow-lg py-1 px-2 bg-gray-500 text-xs text-gray-50 -mt-10">
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
