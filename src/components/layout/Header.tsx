import { Link } from "components/core";
import { ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="z-header sticky top-0 flex w-full items-center justify-between backdrop-blur-md">
    <Link href="/">
      <p className="p-3 text-xl font-bold">hobbescodes</p>
    </Link>
    <ThemeSwitch />
  </div>
);

export default Header;
