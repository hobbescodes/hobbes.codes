"use client";

import { Dialog, Portal } from "@ark-ui/react";
import { clsx } from "clsx";
import { FiMenu as MenuIcon, FiX as CloseIcon } from "react-icons/fi";
import { useIsClient } from "usehooks-ts";

import { ApplicationLinks } from "components/layout";
import { useLayoutStore } from "lib/store";
import { useIsTablet } from "lib/hooks";

const Sidebar = () => {
  const { isSidebarOpen, onCloseSidebar, onOpenSidebar } = useLayoutStore(
    ({ isSidebarOpen, onCloseSidebar, onOpenSidebar }) => ({
      isSidebarOpen,
      onCloseSidebar,
      onOpenSidebar,
    }),
  );

  const isTablet = useIsTablet();

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <Dialog.Root open={isSidebarOpen} onOpen={onOpenSidebar} onClose={onCloseSidebar}>
      {({ isOpen }) => (
        <>
          <Dialog.Trigger className="rounded-md p-3 transition-colors duration-300 hover:bg-background-secondary md:hidden">
            <MenuIcon />
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop className="fixed inset-0 z-backdrop bg-black/50 backdrop-blur-md transition-transform duration-1000" />
            <Dialog.Container className="fixed bottom-0 right-0 top-[15%] z-dialog flex w-full items-center justify-center sm:top-0 sm:w-80">
              <Dialog.Content
                className={clsx(
                  "h-full w-full items-center justify-center overflow-hidden overflow-y-auto rounded-t-xl border border-background-secondary bg-background-primary sm:rounded-none",
                  isOpen ? "duration-500 animate-in" : "duration-200 animate-out",
                  isTablet
                    ? "slide-in-from-right slide-out-to-right"
                    : "slide-in-from-bottom slide-out-to-bottom",
                )}
              >
                <Dialog.CloseTrigger className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md p-1 transition-colors duration-300 hover:bg-accent-subtle">
                  <CloseIcon />
                </Dialog.CloseTrigger>

                <div className="my-2 flex flex-col p-4">
                  <div className="group flex w-fit flex-col">
                    <Dialog.Title className="text-xl font-bold">Navigation</Dialog.Title>

                    <Dialog.Description className="text-sm text-foreground-muted">
                      Feel free to explore the site!
                    </Dialog.Description>
                  </div>

                  <div className="my-4 h-px bg-accent-subtle" />
                  <ApplicationLinks sidebar />
                </div>
              </Dialog.Content>
            </Dialog.Container>
          </Portal>
        </>
      )}
    </Dialog.Root>
  );
};

export default Sidebar;
