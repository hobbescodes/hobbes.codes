import { useEffect } from "react";

import { useBreakpointValue } from "lib/hooks";
import { useLayoutStore } from "lib/store";

/**
 * Close sidebar when browser window resize event occurs.
 */
const useCloseSidebarOnWindowResize = () => {
  const showSidebar = useBreakpointValue({ base: true, md: false });

  const { isSidebarOpen, onCloseSidebar } = useLayoutStore(({ isSidebarOpen, onCloseSidebar }) => ({
    isSidebarOpen,
    onCloseSidebar,
  }));

  useEffect(() => {
    if (!showSidebar && isSidebarOpen) {
      onCloseSidebar();
    }
  }, [isSidebarOpen, onCloseSidebar, showSidebar]);
};

export default useCloseSidebarOnWindowResize;
