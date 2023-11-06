import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import type { LinkProps } from "components/core";
import type { IconType } from "react-icons";

type ApplicationKeys = "home" | "about" | "projects" | "contact";
type SocialKeys = "linkedin" | "github" | "twitter";

interface Navigation extends LinkProps {
  label: string;
  icon?: IconType;
  sublinks?: Navigation[];
}

interface NavigationGroup {
  application: Record<ApplicationKeys, Navigation>;
  socials: Record<SocialKeys, Navigation>;
}

const NAVIGATION_LINKS: NavigationGroup = {
  application: {
    home: {
      label: "Home",
      href: "/",
    },
    about: {
      label: "About",
      href: "/about",
    },
    projects: {
      label: "Projects",
      href: "/projects",
    },
    contact: {
      label: "Contact",
      href: "/contact",
    },
  },
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jakobhauble/",
      icon: FaLinkedin,
    },
    github: {
      label: "GitHub",
      href: "https://www.github.com/hobbescodes/",
      icon: FaGithub,
    },
    twitter: {
      label: "Twitter",
      href: "https://www.x.com/hobbescodes/",
      icon: FaXTwitter,
    },
  },
};

export default NAVIGATION_LINKS;
