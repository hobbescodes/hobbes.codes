import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { signIn, signUp } from "app/actions";
import { OAuthForm } from "components/contact";
import { Button, Input } from "components/core";
import { createServerClient, getRedirectURL } from "lib/util/supabase";

interface Props {
  searchParams: { message: string };
}

const LoginPage = async ({ searchParams }: Props) => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) redirect(`${getRedirectURL()}/contact`);

  return (
    <div className="mx-8 flex w-full flex-col items-center justify-center">
      <form
        className="text-foreground flex w-full flex-1 flex-col justify-center gap-2 duration-1000 animate-in fade-in-0 sm:max-w-md"
        action={signIn}
      >
        <Input
          label="Email"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="off"
        />
        <Input
          label="Password"
          name="password"
          placeholder="••••••••"
          required
          type="password"
          autoComplete="off"
          className="mb-6"
        />
        <Button className="justify-center">Sign In</Button>
        <Button formAction={signUp} variant="outline" className="justify-center">
          Sign Up
        </Button>
        <OAuthForm />
        {searchParams?.message && (
          <p className="mt-4 p-4 text-center text-brand-primary-500">{searchParams.message}</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
