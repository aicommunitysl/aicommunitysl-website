"use client";

import { FiCalendar } from "react-icons/fi";

export function EventsHero() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-primary/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          <FiCalendar size={16} />
          <span className="text-sm font-medium">Join Our Community Events</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Upcoming Events & Workshops
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Explore our curated selection of workshops, meetups, conferences, and
          networking events designed to help you learn, grow, and connect with
          the AI community.
        </p>
      </div>
    </section>
  );
}
