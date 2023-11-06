import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface LayoutStoreState {
  isSidebarOpen: boolean;
  onOpenSidebar: () => void;
  onCloseSidebar: () => void;
}

/**
 * Global layout store.
 */
const useLayoutStore = createWithEqualityFn<LayoutStoreState>((set) => ({
  isSidebarOpen: false,
  onOpenSidebar: () => set(() => ({ isSidebarOpen: true })),
  onCloseSidebar: () => set(() => ({ isSidebarOpen: false })),
  shallow,
}));

export default useLayoutStore;
