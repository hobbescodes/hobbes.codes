import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { minLength, object, parse, string } from "valibot";

import { EmailTemplate } from "components/contact";
import { RESEND_API_KEY } from "lib/config/env";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendEmail = async (_prevState: any, formData: FormData) => {
  "use server";

  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const contactFormSchema = object({
    name: string([minLength(3)]),
    message: string([minLength(10)]),
  });

  const { name, message } = parse(contactFormSchema, {
    name: formData.get("name") as string,
    message: formData.get("message") as string,
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login?message=Could not authenticate user");
  }

  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: `Contact Form <admin@hobbes.codes>`,
    to: "hobbes@animareflection.com",
    subject: "Contact Form Submission",
    react: EmailTemplate({
      name,
      email: user.email as string,
      message,
    }),
  });

  if (error) {
    return { error: true, message: error.message };
  }

  return { error: false, message: "Email sent successfully!" };
};
