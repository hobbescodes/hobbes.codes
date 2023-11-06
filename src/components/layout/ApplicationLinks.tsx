"use client";

import { clsx } from "clsx";
import { usePathname } from "next/navigation";

import { Link } from "components/core";
import { NAVIGATION_LINKS } from "lib/data";

const ApplicationLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden gap-px md:flex">
      {NAVIGATION_LINKS.application.map(({ label, href }) => (
        <Link
          key={href as string}
          href={href}
          className={clsx(
            "p-3 transition-colors duration-300 hover:text-brand-primary-500",
            pathname === href
              ? "text-brand-primary-500"
              : "text-foreground-primary",
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default ApplicationLinks;
