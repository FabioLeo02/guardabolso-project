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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'chorme-yellow': "#FFC312",
        'vibrant-yellow': "#F79F1F",
      },
      spacing: {
        '549px': '549px',
        '800px': '800px',
        '240px': '240px',
        '250px': '250px',
        '50px': '50px',
      },
    },
  },
  plugins: [],
};

export default config;
