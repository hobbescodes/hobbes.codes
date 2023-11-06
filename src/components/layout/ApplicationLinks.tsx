"use client";

import { clsx } from "clsx";
import { usePathname } from "next/navigation";

import { Link } from "components/core";
import { NAVIGATION_LINKS } from "lib/data";

interface Props {
  sidebar?: boolean;
}

const ApplicationLinks = ({ sidebar }: Props) => {
  const pathname = usePathname();

  return (
    <div className={sidebar ? "flex flex-col gap-2 md:hidden" : "hidden gap-px md:flex"}>
      {Object.entries(NAVIGATION_LINKS.application).map(([key, { label, href }]) => {
        const isActiveRoute = pathname.includes(href as string);

        return (
          <Link
            key={key}
            href={href}
            className={clsx(
              "flex justify-center rounded-md px-3 py-2 transition-colors duration-300",
              sidebar ? "mx-2" : "mx-1",
              isActiveRoute
                ? "bg-accent-subtle"
                : "hover:bg-accent-emphasized hover:text-accent-subtle",
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default ApplicationLinks;
