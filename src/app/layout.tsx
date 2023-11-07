import { GeistSans } from "geist/font";

import { Layout } from "components/layout";
import { ThemeProvider } from "components/providers";
import { cx } from "lib/util";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hobbes.codes"),
  title: {
    default: "hobbescodes",
    template: "%s | hobbescodes",
  },
  description: "Develop. Ship. Repeat.",
  openGraph: {
    title: "hobbescodes",
    description: "Develop. Ship. Repeat.",
    url: "https://hobbes.codes",
    siteName: "hobbescodes",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
