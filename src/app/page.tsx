import { Image, Link } from "components/core";

const HomePage = () => {
  return (
    <div className="mx-8 flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
      <div className="flex flex-col gap-4 duration-1000 animate-in lg:mb-20 lg:slide-in-from-bottom-20">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground-primary sm:text-6xl">
          Welcome! I am <span className="text-brand-primary-500">hobbescodes</span>
        </h1>
        <h2 className="text-xl text-accent-emphasized/80">Software Engineer</h2>
        <div className="mt-6 max-w-xl">
          <p className="relative text-lg leading-8 text-foreground-primary text-pretty">
            I am a fullstack developer with a passion for building things. I am currently the
            Engineering Manager at{" "}
            <Link
              href="https://omni.dev/"
              isExternal
              className="animate-underline relative text-brand-primary-500"
            >
              Omni LLC
            </Link>
            . My passion is in smart contract development, but I have extensive experience in many
            areas of software development.
          </p>
        </div>
      </div>
      <div className="relative aspect-[6/5] w-full max-w-lg overflow-hidden rounded-2xl shadow-lg duration-1000 animate-in lg:mt-20 lg:slide-in-from-top-20">
        <Image
          src="/hobbescodes.webp"
          alt="hobbes on the grind"
          className="object-cover"
          priority
          fill
        />
      </div>
    </div>
  );
};

export default HomePage;
