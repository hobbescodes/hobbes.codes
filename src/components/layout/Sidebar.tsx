"use client";

import { Dialog, Portal } from "@ark-ui/react";
import { FiMenu as MenuIcon, FiX as CloseIcon } from "react-icons/fi";

import { Button } from "components/core";
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

  return (
    <>
      <Button
        onClick={onOpenSidebar}
        variant="unset"
        className="rounded-md p-3 transition-colors duration-300 hover:bg-brand-primary-300 dark:hover:bg-brand-primary-900 md:hidden"
      >
        <MenuIcon />
      </Button>
      <Dialog.Root
        open={isSidebarOpen}
        onOpenChange={({ open }) => {
          open ? onOpenSidebar() : onCloseSidebar();
        }}
      >
        <Portal>
          <Dialog.Backdrop className="fixed inset-0 z-backdrop bg-black/50 backdrop-blur-md transition-transform duration-1000" />
          <Dialog.Positioner className="fixed bottom-0 right-0 top-[15%] z-dialog flex w-full items-center justify-center sm:top-0 sm:w-80">
            <Dialog.Content
              className={cx(
                "h-full w-full items-center justify-center overflow-hidden overflow-y-auto rounded-t-xl border border-background-secondary bg-background-primary sm:rounded-none",
                isSidebarOpen ? "duration-500 animate-in" : "duration-200 animate-out",
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
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

export default Sidebar;
