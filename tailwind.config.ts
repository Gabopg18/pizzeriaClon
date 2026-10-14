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
        primary: {
          DEFAULT: "#ED7D31",
          hover: "#D96B20",
          light: "#FDEFE6",
          dark: "#C45A10",
        },
        brand: {
          orange: "#ED7D31",
          orangeHover: "#D96B20",
          orangeLight: "#FDEFE6",
          orangeDark: "#C45A10",
        },
        bg: {
          base: "#F9F8F6",
        },
        surface: {
          card: "#FFFFFF",
          accentDark: "#1A1A1A",
          charcoal: "#141414",
        },
        border: {
          subtle: "#E8E5DF",
          card: "#F0ECE1",
        },
        text: {
          main: "#1D1B1A",
          secondary: "#686461",
          muted: "#9E9A96",
          inverse: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow-condensed)", "Impact", "sans-serif"],
        body: ["var(--font-plus-jakarta-sans)", "Inter", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.05)",
        md: "0 4px 12px rgba(0, 0, 0, 0.08)",
        hover: "0 8px 24px rgba(237, 125, 49, 0.25)",
        polaroid: "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        card: "16px",
        container: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
