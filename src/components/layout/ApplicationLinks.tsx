"use client";

import { usePathname } from "next/navigation";

import { Button, Link } from "components/core";
import { NAVIGATION_LINKS } from "lib/data";
import { cx } from "lib/util";

interface Props {
  sidebar?: boolean;
}

const ApplicationLinks = ({ sidebar }: Props) => {
  const pathname = usePathname();

  return (
    <div className={sidebar ? "flex flex-col gap-2 md:hidden" : "hidden gap-4 md:flex"}>
      {Object.entries(NAVIGATION_LINKS.application).map(([key, { label, href, isDisabled }]) => {
        const isActiveRoute = pathname.includes(href as string);

        return (
          <Link key={key} href={href} isDisabled={isDisabled}>
            <Button
              isDisabled={isDisabled}
              variant="unset"
              className={cx(
                "w-full justify-center",
                sidebar ? "mx-2" : "mx-1",
                isActiveRoute
                  ? "bg-accent-subtle"
                  : isDisabled
                  ? ""
                  : "hover:bg-brand-primary-300 dark:hover:bg-brand-primary-900",
              )}
            >
              {label}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default ApplicationLinks;
