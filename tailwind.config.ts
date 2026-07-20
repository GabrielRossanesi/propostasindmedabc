import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sindmed: {
          ink: "#0A1628",
          graphite: "#0A1628",
          navy: "#01379A",
          blue: "#0154D7",
          lime: "#8BD14C",
          porcelain: "#F5F8FC",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(10, 22, 40, 0.12)",
        glow: "0 24px 70px rgba(1, 84, 215, 0.24)",
      },
      fontFamily: {
        sans: ['"Quicksand"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Arimo"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
