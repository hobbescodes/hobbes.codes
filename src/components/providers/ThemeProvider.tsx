"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/**
 * Theme Provider component.
 */
const ThemeProvider = ({ children }: Props) => {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

export default ThemeProvider;
