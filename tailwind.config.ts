import clipPath from "tailwind-clip-path";
import animate from "tailwindcss-animate";

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        blink: "blink 1s steps(2) 3",
      },
      clipPath: {
        background: "polygon(66.66% 0, 100% 0, 100% 100%, 33.33% 100%)",
      },
      colors: {
        background: {
          primary: "rgb(var(--color-background-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-background-secondary) / <alpha-value>)",
        },
        foreground: {
          primary: "rgb(var(--color-foreground-primary) / <alpha-value>)",
          accent: "rgb(var(--color-foreground-accent) / <alpha-value>)",
          muted: "rgb(var(--color-foreground-muted) / <alpha-value>)",
        },
        accent: {
          subtle: "hsl(var(--color-accent-subtle) / <alpha-value>)",
          emphasized: "hsl(var(--color-accent-emphasized) / <alpha-value>)",
        },
        brand: {
          primary: {
            50: "#fef1f8",
            100: "#fee5f4",
            200: "#feccea",
            300: "#ffa2d8",
            400: "#fd69bb",
            500: "#f841a2",
            600: "#e81a7d",
            700: "#ca0c62",
            800: "#a70d51",
            900: "#8b1045",
            950: "#550226",
          },
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        blink: {
          "0%, 100%": { visibility: "visible" },
          "50%": { visibility: "hidden" },
        },
      },
      zIndex: {
        backdrop: "60",
        background: "-10",
        header: "50",
        dialog: "70",
      },
    },
  },
  plugins: [animate, clipPath],
};
export default config;
