import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { sendEmail, signOut } from "app/actions";
import { ContactForm } from "components/contact";
import { Button } from "components/core";
import { createServerClient, getRedirectURL } from "lib/util/supabase";

interface Props {
  searchParams: { message: string };
}

const ContactPage = async ({ searchParams }: Props) => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`${getRedirectURL()}/login`);

  return (
    <div className="mx-8 flex w-full flex-col items-center justify-center gap-4">
      <ContactForm sendEmail={sendEmail} />
      <form className="w-full max-w-lg duration-1000 animate-in fade-in-0" action={signOut}>
        <Button size="lg" variant="outline" className="w-full justify-center">
          Sign Out
        </Button>
      </form>
      {searchParams?.message && (
        <p className="mt-4 p-4 text-center text-brand-primary-500">{searchParams.message}</p>
      )}
    </div>
  );
};

export default ContactPage;
