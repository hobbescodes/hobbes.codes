"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useLayoutStore } from "lib/store";

/**
 * Close sidebar when route changes (by path).
 */
const useCloseSidebarOnRouteChange = () => {
  const { isSidebarOpen, onCloseSidebar } = useLayoutStore(({ isSidebarOpen, onCloseSidebar }) => ({
    isSidebarOpen,
    onCloseSidebar,
  }));

  const pathname = usePathname();

  useEffect(() => {
    isSidebarOpen && onCloseSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};

export default useCloseSidebarOnRouteChange;
