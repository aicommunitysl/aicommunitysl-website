"use client";

import Link from "next/link";
import { FiArrowRight as ArrowRight, FiStar as Sparkles } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { HomeHeroVisual } from "./home-hero-visual";

export function HomeHero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden md:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={16} />
              <span className="text-sm font-medium">
                Empowering Sri Lanka&#39;s AI Community
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {"Connecting Minds, Shaping the Future"}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Join thousands of AI enthusiasts, researchers, developers, and
              students. Explore cutting-edge AI technologies, attend workshops,
              network with experts, and shape the future of AI in Sri Lanka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/join">
                <Button size="lg" className="w-full sm:w-auto">
                  Join Our Community
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Explore Events
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">2000+</p>
                <p className="text-sm text-muted-foreground">
                  Community Members
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Events Hosted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Partners</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <HomeHeroVisual />
        </div>
      </div>
    </section>
  );
}
