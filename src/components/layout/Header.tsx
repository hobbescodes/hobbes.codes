import { Button, Link } from "components/core";
import { ApplicationLinks, Sidebar, ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="z-header bg-accent-subtle/20 sticky top-0 flex w-full items-center justify-between p-3 backdrop-blur-md">
    <div className="bg-accent-subtle absolute bottom-0 left-0 h-px w-2/3" />
    <div className="flex-1 md:flex-none">
      <Link href="/" className="w-fit">
        <Button variant="unset" className="hover:text-brand-primary-500 p-3 text-xl font-bold">
          <span className="hidden md:inline">&lt; </span>h
          <span className="md:hidden">obbescodes</span>
          <span className="animate-blink hidden md:inline">_</span>
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
