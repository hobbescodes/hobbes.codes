import { notFound } from "next/navigation";

// TODO: reimpliment contact page
const ContactPage = async () => {
  return notFound();
  // const cookieStore = cookies();
  // const supabase = createServerClient(cookieStore);

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (!session) redirect(`${getRedirectURL()}/login`);

  // return (
  //   <div className="mx-8 flex w-full flex-col items-center justify-center gap-4">
  //     <ContactForm sendEmail={sendEmail} />
  //     <form className="w-full max-w-lg duration-1000 animate-in fade-in-0" action={signOut}>
  //       <Button size="lg" variant="outline" className="w-full justify-center">
  //         Sign Out
  //       </Button>
  //     </form>
  //   </div>
  // );
};

export default ContactPage;
