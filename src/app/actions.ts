import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createServerClient } from "lib/util/supabase";

export const signIn = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/auth/confirm`,
    },
  });

  if (error) {
    return redirect(`${origin}/login?message=Could not authenticate user`);
  }

  return redirect(`${origin}/login?message=Check email to continue sign in process`);
};
