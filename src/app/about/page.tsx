import { notFound } from "next/navigation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return <div className="mx-8 flex w-full items-center justify-center">About Page</div>;
};

export default AboutPage;
