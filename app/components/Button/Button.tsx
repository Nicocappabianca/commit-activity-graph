import { FC, ButtonHTMLAttributes } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  const { children } = props;

  return (
    <button
      className="text-white px-4 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-800 active:scale-95 transition-all disabled:pointer-events-none disabled:opacity-45"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
