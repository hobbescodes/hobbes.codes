"use client";

import { Expand } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useIsClient } from "usehooks-ts";

import "@theme-toggles/react/css/Expand.css";

/**
 * Switch theme between light mode and dark mode.
 */
const ThemeSwitch = () => {
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => (theme === "dark" ? setTheme("light") : setTheme("dark"));

  if (!isClient) return <div className="h-8 w-10 p-3" />;

  return (
    <Expand
      onToggle={toggleTheme}
      toggled={theme === "light"}
      className="rounded-md p-3 transition-colors duration-300 hover:text-brand-primary-500"
    />
  );
};

export default ThemeSwitch;
