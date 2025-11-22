"use client";

import Link from "next/link";
import { PARTNERS, GLOBAL_AI_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function OurPartners() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto space-y-16">
        <div>
          <h3 className="font-bold text-center mb-8 text-4xl">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors group"
              >
                <div className="text-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-muted-foreground font-medium">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-primary/20 bg-linear-to-br from-primary/5 to-accent/5 p-8 md:p-12 text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-sm font-semibold">Global Partnership</span>
          </div>

          {/* Global AI logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/globalai-colombo.svg"
              alt={GLOBAL_AI_INFO.name}
              width={120}
              height={120}
              className="w-48 h-48 mx-auto mb-2"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            {GLOBAL_AI_INFO.name}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {GLOBAL_AI_INFO.description}
          </p>
          <Link
            href={GLOBAL_AI_INFO.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2">
              {GLOBAL_AI_INFO.buttonText}
              <ExternalLink size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
