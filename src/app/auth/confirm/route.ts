import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { createServerClient } from "lib/util/supabase";

import type { EmailOtpType } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (token_hash && type) {
    const cookieStore = cookies();
    const supabase = createServerClient(cookieStore);

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      return NextResponse.redirect(`${origin}/contact`);
    }
  }

  // return the user to an error page with some instructions
  return NextResponse.redirect("/auth/auth-code-error");
}
