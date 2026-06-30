"use client";

export function AboutHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          About AI Community Sri Lanka
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We are a passionate collective of AI enthusiasts, researchers,
          developers, and students working together to advance artificial
          intelligence innovation and adoption in Sri Lanka.
        </p>
      </div>
    </section>
  );
}
