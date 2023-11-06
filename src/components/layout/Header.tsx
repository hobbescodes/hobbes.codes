import { Link } from "components/core";
import { ApplicationLinks, Sidebar, ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="sticky top-0 z-header flex w-full items-center justify-between bg-accent-subtle p-3 backdrop-blur-md">
    <div className="flex-1 md:flex-none">
      <Link
        href="/"
        className="w-fit p-3 text-xl font-bold transition-colors duration-300 hover:text-brand-primary-500"
      >
        h<span className="md:hidden">obbescodes</span>
      </Link>
    </div>

    <ApplicationLinks />
    <ThemeSwitch />
    <Sidebar />
  </div>
);

export default Header;
