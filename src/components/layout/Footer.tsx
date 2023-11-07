import { Button, Link } from "components/core";
import { NAVIGATION_LINKS } from "lib/data";

const Footer = () => (
  <footer className="border-accent-subtle bg-background-primary flex w-full flex-col items-center justify-center gap-2 border-t py-4">
    <div className="flex gap-2">
      {Object.entries(NAVIGATION_LINKS.socials).map(([key, { label, icon: Icon, href }]) => (
        <Link key={key} href={href} isExternal>
          <Button
            variant="unset"
            className="text-foreground-primary hover:text-brand-primary-500 p-2"
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
