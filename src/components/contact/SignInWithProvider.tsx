"use client";

import { redirect } from "next/navigation";

import { Button } from "components/core";
import { createBrowserClient, getRedirectURL } from "lib/util/supabase";

import type { Provider } from "@supabase/supabase-js";
import type { IconType } from "react-icons";

interface Props {
  provider: Provider;
  icon: IconType;
}

const SignInWithGithub = ({ provider, icon: Icon }: Props) => {
  const supabase = createBrowserClient();

  const providerLabel = provider.charAt(0).toUpperCase() + provider.slice(1);

  const signInWithProvider = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${getRedirectURL()}/auth/callback`,
      },
    });

    if (error) redirect(`${origin}/login?message=Could not authenticate user`);
  };
  return (
    <Button formAction={signInWithProvider} className="w-full max-w-xs justify-center">
      <Icon className="mr-2" />
      {providerLabel}
    </Button>
  );
};

export default SignInWithGithub;
