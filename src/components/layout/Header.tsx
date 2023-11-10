import { Button, Link } from "components/core";
import { ApplicationLinks, Sidebar, ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="sticky top-0 z-header flex w-full items-center justify-between bg-accent-subtle/20 p-3 backdrop-blur-md">
    <div className="flex-1 md:flex-none">
      <Link href="/" className="w-fit">
        <Button variant="unset" className="p-3 text-xl font-bold hover:text-brand-primary-500">
          <span className="hidden md:inline">&lt; </span>h
          <span className="md:hidden">obbescodes</span>
          <span className="hidden animate-blink md:inline">_</span>
          <span className="hidden md:inline"> &gt;</span>
        </Button>
      </Link>
    </div>

    <ApplicationLinks />
    <ThemeSwitch />
    <Sidebar />
  </div>
);

export default Header;
