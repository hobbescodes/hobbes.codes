import { createServerClient } from "@supabase/ssr";
//eslint-disable-next-line  @typescript-eslint/consistent-type-imports
import { cookies } from "next/headers";

import { SUPABASE_ANON_KEY, SUPABASE_URL } from "lib/config/env";

import type { CookieOptions } from "@supabase/ssr";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};
