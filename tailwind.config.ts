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
        amber: {
          DEFAULT: "#F5A623",
          hover: "#E09210",
          active: "#C87F08",
          light: "#FEF6E9",
          dark: "#B87508",
        },
        charcoal: {
          DEFAULT: "#171C24",
          surface: "#1F2631",
          border: "#2A3442",
          dark: "#0F1217",
          light: "#252D3A",
        },
        steel: {
          DEFAULT: "#293545",
          light: "#3B4A5E",
          muted: "#52637A",
        },
        industrial: {
          bg: "#F4F5F7",
          border: "#E2E6EA",
          body: "#626B75",
          heading: "#171C24",
        },
      },
      fontFamily: {
        heading: ["var(--font-barlow-condensed)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(23, 28, 36, 0.08)",
        "card-hover": "0 12px 28px -4px rgba(23, 28, 36, 0.14)",
        amber: "0 4px 14px 0 rgba(245, 166, 35, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
