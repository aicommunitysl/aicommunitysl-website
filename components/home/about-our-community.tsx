"use client";

import Link from "next/link";
import {
  FiArrowRight as ArrowRight,
  FiTarget as Target,
  FiEye as Eye,
  FiHeart as Heart,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function AboutOurCommunity() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Empower the AI community of Sri Lanka through education, collaboration, and innovation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Build a thriving ecosystem where AI talents can connect, learn, and create groundbreaking solutions.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Community-driven, knowledge-sharing, innovation-focused, and inclusive for all skill levels.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-card border-y border-border lg:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            About Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI Community Sri Lanka is a vibrant hub for anyone passionate about
            artificial intelligence, machine learning, and the future of
            technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
