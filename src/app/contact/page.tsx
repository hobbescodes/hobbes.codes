import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { signOut } from "app/actions";
import { ContactForm } from "components/contact";
import { Button } from "components/core";
import { createServerClient, getRedirectURL } from "lib/util/supabase";

const ContactPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`${getRedirectURL()}/login`);

  return (
    <div className="mx-8 flex w-full flex-col items-center justify-center gap-4">
      <ContactForm user={session.user} />
      <form className="w-full max-w-lg duration-1000 animate-in fade-in-0" action={signOut}>
        <Button size="lg" variant="outline" className="w-full justify-center">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;
