import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        commit: {
          "high-density": "#39D353",
          "medium-high-density": "#26A641",
          "medium-density": "#016C31",
          "low-density": "#0D4429",
          "no-commits": "#161B22",
        },
      },
    },
  },
  plugins: [],
};
export default config;
