"use client";

import Image from "next/image";

export function OurStory() {
  return (
    <section className="pb-24 md:pb-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 w-full relative flex items-center justify-center">
            {/* Unique Background: Digital Mesh & Floating Shapes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Soft Gradient Mesh */}
              <div className="absolute w-[120%] h-[120%] bg-linear-to-tr from-primary/5 via-transparent to-accent/5 blur-3xl"></div>

              {/* Geometric Shapes - Squircles/Diamonds */}
              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] border border-primary/10 rounded-[40px] rotate-12 animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] border border-dashed border-accent/20 rounded-[40px] -rotate-6 animate-[spin_30s_linear_infinite_reverse]"></div>

              {/* Floating Data Points */}
              <div className="absolute -top-4 right-10 w-16 h-16 bg-primary/5 rounded-2xl rotate-45 animate-pulse"></div>
              <div className="absolute bottom-0 left-10 w-12 h-12 border border-primary/20 rounded-xl -rotate-12 animate-pulse delay-700"></div>

              {/* Connecting Dots Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-48 sm:h-56 md:h-64 lg:h-80 z-10">
              <Image
                src="/logo.svg"
                alt="AI Community Sri Lanka"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                className="object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              />
            </div>
          </div>

          <div className="md:w-1/2 w-full space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI Community Sri Lanka began as a small meetup of curious minds
              interested in artificial intelligence. Over time we grew into a
              collaborative community of researchers, developers, students, and
              professionals — all working together to share knowledge, build
              projects, and grow the AI ecosystem in Sri Lanka.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We run events, workshops, and study groups, and we welcome people
              from all backgrounds who want to learn, teach, and contribute.
              Join us on the journey to make AI accessible and impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
