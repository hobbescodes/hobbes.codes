import { Link } from "components/core";
import { NAVIGATION_LINKS } from "lib/data";

const Footer = () => (
  <footer className="flex w-full flex-col items-center justify-center gap-2 border-t border-accent-subtle bg-background-primary py-4">
    <div className="flex gap-2">
      {Object.entries(NAVIGATION_LINKS.socials).map(([key, { label, icon: Icon, href }]) => (
        <Link
          key={key}
          href={href}
          isExternal
          className="p-2 text-foreground-primary transition-colors duration-300 hover:text-brand-primary-500"
        >
          <span className="sr-only">{label}</span>
          {Icon && <Icon className="h-4 w-4" />}
        </Link>
      ))}
    </div>
    <p className="text-foreground-muted">&copy; {new Date().getFullYear()} hobbescodes</p>
  </footer>
);

export default Footer;
