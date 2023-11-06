import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { LinkProps } from "components/core";
import type { IconType } from "react-icons";

interface Navigation extends LinkProps {
  label: string;
  icon?: IconType;
}

interface NavigationGroup {
  [key: string]: Navigation[];
}

const NAVIGATION_LINKS: NavigationGroup = {
  application: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jakobhauble/",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://www.github.com/hobbescodes/",
      icon: FaGithub,
    },
    {
      label: "Twitter",
      href: "https://www.x.com/hobbescodes/",
      icon: FaXTwitter,
    },
  ],
};

export default NAVIGATION_LINKS;
