"use client";

import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/constants";
import Image from "next/image";

export function EventsPreview() {
  const upcomingEvents = EVENTS.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events</h2>
            <p className="text-muted-foreground mt-2">
              Join us for workshops, meetups, and conferences
            </p>
          </div>
          <Link href="/events">
            <Button variant="outline">
              View All Events
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Event Image */}
              <div className="h-48 overflow-hidden bg-muted">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={192}
                />
              </div>

              {/* Event Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                    {event.category}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground text-lg">
                  {event.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2">
                  {event.description}
                </p>

                {/* Event Meta */}
                <div className="space-y-2 text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>

                {event.speakers && event.speakers.length > 0 && (
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Speakers
                    </p>
                    <div className="flex -space-x-2">
                      {event.speakers.slice(0, 3).map((speaker, idx) => (
                        <Image
                          key={idx}
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          title={speaker.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover border-2 border-card"
                        />
                      ))}
                      {event.speakers.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">
                            +{event.speakers.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link href={event.link}>
                  <Button variant="default" className="mt-4">
                    Learn More
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
