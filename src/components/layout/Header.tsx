import { ThemeSwitch } from "components/layout";

const Header = () => (
  <div className="z-header sticky top-0 flex w-full items-center justify-between backdrop-blur-md">
    <p className="p-3 text-xl font-bold">hobbescodes</p>
    <ThemeSwitch />
  </div>
);

export default Header;
