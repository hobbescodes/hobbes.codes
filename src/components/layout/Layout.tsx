import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => (
    <div className="grid min-h-screen grid-rows-layout p-2">
      <p>Header</p>
      <main className="mx-auto flex w-full max-w-6xl items-center justify-center">
        {children}
      </main>
      <p>Footer</p>
    </div>
  );

export default Layout;