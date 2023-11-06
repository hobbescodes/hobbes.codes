"use client";

import { Footer, Header } from "components/layout";
import { useCloseSidebarOnRouteChange, useCloseSidebarOnWindowResize } from "lib/hooks";

import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  useCloseSidebarOnRouteChange();
  useCloseSidebarOnWindowResize();

  return (
    <div className="relative grid min-h-screen w-full grid-rows-layout">
      <div
        className="clip-path-background absolute inset-y-0 right-0 -z-10 w-full bg-accent-subtle/20"
        aria-hidden="true"
      />
      <div
        className="clip-path-border absolute inset-y-0 right-0 -z-10 w-full bg-brand-primary-500"
        aria-hidden="true"
      />
      <Header />

      <main className="mx-auto flex w-full max-w-6xl items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
