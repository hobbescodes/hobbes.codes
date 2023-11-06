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
    <div className="grid min-h-screen grid-rows-layout">
      <Header />
      <main className="mx-auto flex w-full max-w-6xl items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
