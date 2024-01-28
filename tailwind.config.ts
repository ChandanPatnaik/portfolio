import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "#cccc33",
        "dark-blue": "#14121c",
        "dark-slate": "#0e0d10",
        "light-sky": "#ccd6f6",
        milk: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
export default config;
