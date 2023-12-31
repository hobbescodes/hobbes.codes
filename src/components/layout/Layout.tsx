"use client";

import { Toaster } from "sonner";

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
      <Header />
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className="absolute inset-y-0 right-0 z-background w-full bg-accent-subtle/20 clip-path-background"
          aria-hidden="true"
        />
        <main className="mx-auto flex w-full max-w-6xl items-center justify-center py-8">
          {children}
        </main>
      </div>
      <Footer />
      <Toaster richColors expand closeButton position="top-center" />
    </div>
  );
};

export default Layout;
