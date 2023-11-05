import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "components/core";

const SOCIALS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jakobhauble/",
  },
  {
    icon: FaGithub,
    href: "https://www.github.com/hobbescodes/",
  },
  {
    icon: FaXTwitter,
    href: "https://www.x.com/hobbescodes/",
  },
];

const Footer = () => (
  <footer className="flex w-full flex-col items-center justify-center gap-2 border-t border-accent-subtle py-4">
    <div className="flex gap-2">
      {SOCIALS.map(({ icon: Icon, href }) => (
        <Link
          key={href}
          href={href}
          isExternal
          className="p-2 text-foreground-primary transition-colors duration-300 hover:text-brand-primary-500"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
    <p className="opacity-40">&copy; {new Date().getFullYear()} hobbescodes</p>
  </footer>
);

export default Footer;
