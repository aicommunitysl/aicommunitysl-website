"use client";

import Link from "next/link";
import { FiMic, FiUsers, FiAward, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function CallForSpeakers() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <FiMic size={16} />
            <span className="text-sm font-semibold">Call for Speakers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
            Present Your AI Knowledge to the Community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            If you&apos;re interested in sharing your AI expertise and insights
            with our vibrant community, we&apos;d love to hear from you. Whether
            you&apos;re a researcher, engineer, educator, or enthusiast, your
            knowledge can inspire and educate others.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          <div className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <FiUsers size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Reach Audience</h3>
            <p className="text-sm text-muted-foreground">
              Share your knowledge with 2000+ community members
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="w-12 h-12 rounded-lg bg-accent/90 flex items-center justify-center mx-auto">
              <FiAward size={24} className="text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground">
              Build Your Profile
            </h3>
            <p className="text-sm text-muted-foreground">
              Establish yourself as a thought leader in AI
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border space-y-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <FiMic size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Network</h3>
            <p className="text-sm text-muted-foreground">
              Connect with fellow AI professionals and enthusiasts
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link href="/contact">
            <Button size="lg" className="px-8 cursor-pointer gap-2">
              <FiMail size={18} />
              Get in Touch
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="px-8 bg-transparent cursor-pointer"
            >
              Learn More
            </Button>
          </Link>
        </div>

        <p className="text-muted-foreground text-base">
          Questions? Contact us or reach out through any of our social
          platforms.
        </p>
      </div>
    </section>
  );
}
