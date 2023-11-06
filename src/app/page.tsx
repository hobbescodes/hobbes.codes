import { Image } from "components/core";

const HomePage = () => {
  return (
    <div className="mx-8 flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
      <div className="flex flex-col gap-4 lg:mb-20">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground-primary sm:text-6xl">
          Welcome! I am <span className="text-brand-primary-500">hobbescodes</span>
        </h1>
        <h2 className="text-accent-emphasized/80 text-xl">Software Engineer</h2>
        <div className="mt-6 max-w-xl">
          <p className="text-lg leading-8 text-foreground-primary">
            I am a fullstack developer with a passion for building things. I am currently the CCO of
            Anima Reflection LLC. My primary focus is on smart contract development, but I have
            extensive experience with web development as well.
          </p>
        </div>
      </div>
      <div className="relative aspect-[6/5] w-full max-w-lg overflow-hidden rounded-2xl shadow-md shadow-brand-primary-500/40 lg:mt-20">
        <Image src="/hobbescodes.webp" alt="" className="object-cover" priority fill />
      </div>
    </div>
  );
};

export default HomePage;
