import { GeistSans } from "geist/font";

import { Layout } from "components/layout";
import { ThemeProvider } from "components/providers";
import { cx } from "lib/util";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "hobbescodes",
  description: "hobbescodes personal website",
};

interface Props {
  children?: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={cx(GeistSans.className, "bg-background-primary text-foreground-primary")}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
