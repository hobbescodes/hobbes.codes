import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { signIn, signUp } from "app/actions";
import { LoginForm } from "components/contact";
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
      <LoginForm signIn={signIn} signUp={signUp} />
      {searchParams?.message && (
        <p className="mt-4 p-4 text-center text-brand-primary-500">{searchParams.message}</p>
      )}
    </div>
  );
};

export default LoginPage;
