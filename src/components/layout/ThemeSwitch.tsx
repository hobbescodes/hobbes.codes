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

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  if (!isClient) return null;

  return (
    <Expand
      onToggle={toggleTheme}
      toggled={theme === "light"}
      className="rounded-md p-3 hover:text-brand-primary-500 transition-colors duration-300"
    />
  );
};

export default ThemeSwitch;