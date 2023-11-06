import { Button, Link } from "components/core";
import { ApplicationLinks, Sidebar, ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="sticky top-0 z-header flex w-full items-center justify-between bg-accent-subtle/20 p-3 backdrop-blur-md">
    <div className="absolute bottom-0 left-0 h-px w-2/3 bg-accent-subtle" />
    <div className="flex-1 md:flex-none">
      <Link href="/" className="w-fit">
        <Button className="p-3 text-xl font-bold hover:text-brand-primary-500">
          <span className="hidden md:inline">{"<"}</span>h
          <span className="md:hidden">obbescodes</span>
          <span className="hidden animate-[wiggle_1.5s_linear] md:inline">_</span>
          <span className="hidden md:inline">{">"}</span>
        </Button>
      </Link>
    </div>

    <ApplicationLinks />
    <ThemeSwitch />
    <Sidebar />
  </div>
);

export default Header;
