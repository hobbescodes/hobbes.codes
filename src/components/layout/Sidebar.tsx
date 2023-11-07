"use client";

import { Dialog, Portal } from "@ark-ui/react";
import { FiMenu as MenuIcon, FiX as CloseIcon } from "react-icons/fi";
import { useIsClient } from "usehooks-ts";

import { ApplicationLinks } from "components/layout";
import { useIsTablet } from "lib/hooks";
import { useLayoutStore } from "lib/store";
import { cx } from "lib/util";

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
          <Dialog.Trigger className="hover:bg-brand-primary-300 dark:hover:bg-brand-primary-900 rounded-md p-3 transition-colors duration-300 md:hidden">
            <MenuIcon />
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop className="z-backdrop fixed inset-0 bg-black/50 backdrop-blur-md transition-transform duration-1000" />
            <Dialog.Container className="z-dialog fixed bottom-0 right-0 top-[15%] flex w-full items-center justify-center sm:top-0 sm:w-80">
              <Dialog.Content
                className={cx(
                  "border-background-secondary bg-background-primary h-full w-full items-center justify-center overflow-hidden overflow-y-auto rounded-t-xl border sm:rounded-none",
                  isOpen ? "duration-500 animate-in" : "duration-200 animate-out",
                  isTablet
                    ? "slide-in-from-right slide-out-to-right"
                    : "slide-in-from-bottom slide-out-to-bottom",
                )}
              >
                <Dialog.CloseTrigger className="hover:bg-accent-subtle absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md p-1 transition-colors duration-300">
                  <CloseIcon />
                </Dialog.CloseTrigger>

                <div className="my-2 flex flex-col p-4">
                  <div className="group flex w-fit flex-col">
                    <Dialog.Title className="text-xl font-bold">Navigation</Dialog.Title>

                    <Dialog.Description className="text-foreground-muted text-sm">
                      Feel free to explore the site!
                    </Dialog.Description>
                  </div>

                  <div className="bg-accent-subtle my-4 h-px" />
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
