"use client";

import { FaGithub } from "react-icons/fa";

import { SignInWithProvider } from "components/contact";

const OAuthForm = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <p className="my-8 text-accent-emphasized">Or continue with</p>
      <SignInWithProvider provider="github" icon={FaGithub} />
    </div>
  );
};

export default OAuthForm;
