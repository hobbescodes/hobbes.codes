import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ContactForm } from "components/contact";
import { createServerClient, getRedirectURL } from "lib/util/supabase";

const ContactPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient(cookieStore);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`${getRedirectURL()}/login`);

  return (
    <div className="mx-8 flex w-full items-center justify-center">
      <ContactForm user={session.user} />
    </div>
  );
};

export default ContactPage;
