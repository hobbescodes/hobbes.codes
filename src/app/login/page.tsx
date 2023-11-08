import { signIn } from "app/actions";
import { Button, Input } from "components/core";

interface Props {
  searchParams: { message: string };
}

const LoginPage = ({ searchParams }: Props) => {
  return (
    <div className="mx-8 flex w-full items-center justify-center">
      <form
        className="text-foreground flex w-full flex-1 flex-col justify-center gap-2 duration-1000 animate-in fade-in-0 sm:max-w-md"
        action={signIn}
      >
        <Input
          label="Email"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="off"
          className="mb-6"
        />
        <Button className="justify-center">Sign In</Button>
        {searchParams?.message && (
          <p className="mt-4 p-4 text-center text-brand-primary-500">{searchParams.message}</p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
