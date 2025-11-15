import Image from "next/image";

export const metadata = {
  title: "AI Community Sri Lanka",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="mx-auto max-w-xl text-center py-12 sm:py-24">
        <Image
          src="/logo.png"
          alt="Logo"
          width={256}
          height={256}
          className="mx-auto mb-6 sm:mb-8 w-56 h-56 sm:w-72 sm:h-72 object-contain"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-zinc-50">
          Coming Soon
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6">
          We&apos;re building something amazing.{" "}
          <span className="block sm:inline">Stay tuned!</span>
        </p>
        <br />
      </div>
    </main>
  );
}
