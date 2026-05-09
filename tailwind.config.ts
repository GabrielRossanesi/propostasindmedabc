import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bloom: {
          ink: "#171814",
          graphite: "#20231F",
          forest: "#174D3E",
          green: "#2F7D64",
          mint: "#DDEFE7",
          champagne: "#D8BE8A",
          rose: "#C98298",
          porcelain: "#F7F4ED",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 24, 20, 0.10)",
        glow: "0 24px 70px rgba(47, 125, 100, 0.22)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
