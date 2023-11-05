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
          secondary: {
            50: "#f5f2ff",
            100: "#eee7ff",
            200: "#ded3ff",
            300: "#c5afff",
            400: "#aa81ff",
            500: "#914fff",
            600: "#852bfc",
            700: "#7b20e9",
            800: "#6314c3",
            900: "#53139f",
            950: "#32096c",
          },
          tertiary: {
            50: "#ecffff",
            100: "#d0fcfd",
            200: "#a7f8fa",
            300: "#6aeff6",
            400: "#20dce9",
            500: "#0ac0d0",
            600: "#0c9aae",
            700: "#117a8d",
            800: "#176373",
            900: "#185261",
            950: "#093643",
          },
        }
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  plugins: [],
};
export default config;
