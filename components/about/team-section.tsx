"use client";

import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { TEAM_MEMBERS } from "@/lib/constants";
import Image from "next/image";

export function TeamSection() {
  const delayClasses = ["delay-0", "delay-1", "delay-2", "delay-3"];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals dedicated to building the AI community in Sri
            Lanka.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => {
            const delayClass = delayClasses[index % delayClasses.length];
            return (
              <div
                key={member.id}
                className={`group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg animate-fade-in ${delayClass}`}
              >
                {/* Profile Image */}
                <div className="h-64 overflow-hidden bg-linear-to-b from-primary/10 to-accent/10">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    width={400}
                    height={256}
                  />
                </div>

                {/* Profile Info */}
                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>

                  {/* LinkedIn Link */}
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4"
                  >
                    <FaLinkedinIn size={16} />
                    LinkedIn
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
