import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createServerClient } from "lib/util/supabase";

export const signIn = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`${origin}/login?message=Could not authenticate user`);
  }

  return redirect(`${origin}/contact`);
};

export const signUp = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
};

export const signOut = async () => {
  "use server";

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);
  await supabase.auth.signOut();
  return redirect("/");
};
