"use client";

import { FiMail } from "react-icons/fi";

export function ContactHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          <FiMail size={16} />
          <span className="text-sm font-medium">Get in Touch</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Have questions, feedback, or partnership opportunities? We&apos;d love
          to hear from you. Reach out to us anytime. We typically reply as soon
          as possible.
        </p>
      </div>
    </section>
  );
}
