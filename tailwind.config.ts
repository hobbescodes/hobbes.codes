import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "rgb(var(--color-background-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-background-secondary) / <alpha-value>)",
        },
        foreground: {
          primary: "rgb(var(--color-foreground-primary) / <alpha-value>)",
        },
        accent: {
          subtle: "rgb(var(--color-accent-subtle) / <alpha-value>)",
        },
        brand: {
          primary: {
            50: "#eff8ff",
            100: "#dbeefe",
            200: "#bfe3fe",
            300: "#94d1fc",
            400: "#61b7f9",
            500: "#3c98f5",
            600: "#2077e9",
            700: "#1e65d7",
            800: "#1f52ae",
            900: "#1f4789",
            950: "#172c54",
          },
        },
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      zIndex: {
        header: "50",
      },
    },
  },
  plugins: [],
};
export default config;
