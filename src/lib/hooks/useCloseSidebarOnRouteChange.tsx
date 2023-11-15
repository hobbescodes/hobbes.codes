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

  // biome-ignore lint: ignore exaustive-deps rule
  useEffect(() => {
    isSidebarOpen && onCloseSidebar();
  }, [pathname]);
};

export default useCloseSidebarOnRouteChange;
