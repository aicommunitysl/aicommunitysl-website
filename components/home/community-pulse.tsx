import Image from "next/image";
import Link from "next/link";
import {
  FiActivity as Activity,
  FiArrowRight as ArrowRight,
  FiCpu as Cpu,
  FiMic as Mic,
  FiUsers as Users,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    icon: Activity,
    title: "Community showcases",
    description:
      "Live demos, lightning talks, and open discussions that turn experiments into shared momentum.",
  },
  {
    icon: Cpu,
    title: "Hands-on AI tracks",
    description:
      "Practical sessions for builders exploring LLM apps, data workflows, and production-ready tooling.",
  },
  {
    icon: Mic,
    title: "Speaker pathways",
    description:
      "A clear route for students, practitioners, and founders to present work and lead new conversations.",
  },
];

const pulsePoints = [
  "Meetups that connect research, product, and engineering communities.",
  "Programs designed for both first-time learners and experienced AI builders.",
  "A stronger platform for events, collaborations, and new local success stories.",
];

export function CommunityPulse() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 md:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute inset-y-16 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Activity size={16} />
              <span>What&rsquo;s new in AICSL</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-balance md:text-5xl">
                A more current home for Sri Lanka&rsquo;s AI builders.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We&rsquo;re sharpening the website around the work that matters
                most: learning in public, building with others, and making it
                easier to discover the next event, collaboration, or speaking
                opportunity.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-background/90 p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="mt-2 text-lg font-semibold">
                  Builder-first programs
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/90 p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Format</p>
                <p className="mt-2 text-lg font-semibold">
                  Talks, demos, workshops
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background/90 p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">Outcome</p>
                <p className="mt-2 text-lg font-semibold">
                  Stronger local AI network
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/events">
                <Button size="lg" className="w-full sm:w-auto">
                  See What&rsquo;s Coming Next
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-transparent sm:w-auto"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl border border-primary/20 bg-card shadow-xl">
            <div className="relative h-72 w-full overflow-hidden border-b border-primary/10">
              <Image
                src="/banner.jpg"
                alt="AI Community Sri Lanka community banner"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-background/80 p-4 backdrop-blur-sm dark:bg-background/70">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Community pulse
                </p>
                <p className="mt-2 text-xl font-semibold text-foreground">
                  Fresh energy for meetups, collaborations, and practical AI
                  learning.
                </p>
              </div>
            </div>

            <div className="space-y-4 p-6">
              {pulsePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-background/80 p-4"
                >
                  <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                    <Users size={16} />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;

            return (
              <div
                key={initiative.title}
                className="rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold">{initiative.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {initiative.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
