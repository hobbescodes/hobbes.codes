"use client";

import { Dialog, Portal } from "@ark-ui/react";
import { clsx } from "clsx";
import { FiMenu as MenuIcon, FiX as CloseIcon } from "react-icons/fi";
import { useIsClient } from "usehooks-ts";

import { ApplicationLinks } from "components/layout";
import { useLayoutStore } from "lib/store";

const Sidebar = () => {
  const { isSidebarOpen, onCloseSidebar, onOpenSidebar } = useLayoutStore(
    ({ isSidebarOpen, onCloseSidebar, onOpenSidebar }) => ({
      isSidebarOpen,
      onCloseSidebar,
      onOpenSidebar,
    }),
  );

  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <Dialog.Root open={isSidebarOpen} onOpen={onOpenSidebar} onClose={onCloseSidebar}>
      {({ isOpen }) => (
        <>
          <Dialog.Trigger className="rounded-md p-3 hover:bg-accent-subtle md:hidden">
            <MenuIcon />
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop className="z-backdrop fixed inset-0 bg-black/50 backdrop-blur-md transition-transform duration-1000" />
            <Dialog.Container className="z-dialog fixed bottom-0 right-0 top-0 flex w-full items-center justify-center sm:w-80">
              <Dialog.Content
                className={clsx(
                  "h-full w-full items-center justify-center overflow-hidden overflow-y-auto bg-background-primary pb-4 sm:pb-10",
                  isOpen
                    ? "animate-in slide-in-from-right duration-500"
                    : "animate-out slide-out-to-right duration-200",
                )}
              >
                <Dialog.CloseTrigger className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-md p-1 transition hover:bg-accent-subtle">
                  <CloseIcon />
                </Dialog.CloseTrigger>

                <div className="my-2 flex flex-col p-4">
                  <div className="group flex w-fit flex-col">
                    <Dialog.Title className="text-xl font-bold group-hover:opacity-80">
                      Navigation Sidebar
                    </Dialog.Title>

                    <Dialog.Description className="text-sm text-gray-500">
                      Feel free to explore the site!
                    </Dialog.Description>
                  </div>

                  <div className="mt-4 h-px bg-accent-subtle" />
                </div>
                <ApplicationLinks sidebar />
              </Dialog.Content>
            </Dialog.Container>
          </Portal>
        </>
      )}
    </Dialog.Root>
  );
};

export default Sidebar;
