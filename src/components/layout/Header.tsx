import { Link } from "components/core";
import { ApplicationLinks, ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="z-header sticky top-0 flex w-full items-center justify-between backdrop-blur-md">
    <Link href="/" className="p-3 text-xl font-bold">
      hobbescodes
    </Link>
    <div className="flex gap-2">
      <ThemeSwitch />
      <ApplicationLinks />
    </div>
  </div>
);

export default Header;
