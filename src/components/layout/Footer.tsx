import { Button, Link } from "components/core";
import { NAVIGATION_LINKS } from "lib/data";

const Footer = () => (
  <footer className="flex w-full flex-col items-center justify-center gap-2 bg-background-primary py-4">
    <div className="flex gap-2">
      {Object.entries(NAVIGATION_LINKS.socials).map(([key, { label, icon: Icon, href }]) => (
        <Link key={key} href={href} isExternal>
          <Button
            variant="unset"
            className="p-2 text-foreground-primary hover:text-brand-primary-500"
          >
            <span className="sr-only">{label}</span>
            {Icon && <Icon className="h-4 w-4" />}
          </Button>
        </Link>
      ))}
    </div>
    <p className="text-foreground-muted">&copy; {new Date().getFullYear()} hobbescodes</p>
  </footer>
);

export default Footer;
