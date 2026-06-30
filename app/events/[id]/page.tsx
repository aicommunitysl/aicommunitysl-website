import type { Metadata } from "next";
import { metadataEventDetails } from "../../../lib/metadata";
import Link from "next/link";
import {
  FiCalendar,
  FiMapPin,
  FiTag,
  FiArrowLeft,
  FiClock,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getEventById, getEvents } from "@/lib/data";
import Image from "next/image";
import { getValidImageUrl, capitalize } from "@/lib/utils";

export const metadata: Metadata = metadataEventDetails;

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEventById(id);
  const allEvents = getEvents(false, 3);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Event Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn&apos;t find the event you&apos;re looking for.
            </p>
            <Link href="/events">
              <Button>
                <FiArrowLeft size={18} />
                Back to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
          <Image
            src={getValidImageUrl(event.image)}
            alt={event.title}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/events" className="inline-block mb-8">
              <Button variant="outline">
                <FiArrowLeft size={18} />
                Back to Events
              </Button>
            </Link>

            {/* Event Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold flex items-center gap-2">
                  <FiTag size={18} />
                  {capitalize(event.category)}
                </span>
                <span className="px-4 py-2 rounded-lg bg-accent/90 text-muted-foreground font-semibold">
                  {event.isUpcoming ? "Upcoming" : "Past"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {event.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Event Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-6 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <FiCalendar className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Date</h3>
                  <p className="text-muted-foreground">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiClock className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Time</h3>
                  <p className="text-muted-foreground">{event.time || "TBA"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiMapPin className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Location
                  </h3>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </div>
            </div>

            {event.speakers && event.speakers.length > 0 && (
              <div className="mb-12 p-6 bg-primary/5 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Meet the Speakers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="text-center">
                      <Image
                        src={getValidImageUrl(speaker.image)}
                        alt={speaker.name}
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                      />
                      <h3 className="font-semibold text-lg text-foreground">
                        {speaker.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {speaker.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  About This Event
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {event.details}
                </p>
              </div>

              {/* Sessions Section */}
              {event.sessions && event.sessions.length > 0 && (
                <div className="p-6 bg-accent/5 rounded-xl border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Event Sessions
                  </h2>
                  <div className="space-y-6">
                    {event.sessions.map((session, idx) => {
                      const speaker = event.speakers?.find((s) => {
                        const sessionSpeaker = session.speaker;
                        if (!sessionSpeaker) return false;
                        return (
                          s.name.toLowerCase() ===
                            sessionSpeaker.toLowerCase() ||
                          sessionSpeaker.includes(s.name)
                        );
                      });

                      return (
                        <div
                          key={idx}
                          className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                        >
                          {/* Session Number and Title */}
                          <div className="mb-4">
                            <h3 className="text-sm font-semibold text-primary mb-1">
                              Session {idx + 1}
                            </h3>
                            <h4 className="text-xl font-bold text-foreground">
                              {session.title}
                            </h4>
                          </div>

                          {/* Speaker Details */}
                          {speaker ? (
                            <div className="flex items-center gap-4">
                              <Image
                                src={getValidImageUrl(speaker.image)}
                                alt={speaker.name}
                                width={128}
                                height={128}
                                className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                              />
                              <div>
                                <p className="font-semibold text-foreground text-lg">
                                  {speaker.name}
                                </p>
                                <p className="text-muted-foreground">
                                  {speaker.role}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <p className="text-muted-foreground italic">
                              {session.speaker}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href={event.link}>
                  <Button size="lg">
                    {event.isUpcoming ? "Register Now" : "View Recording"}
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline" size="lg">
                    Have Questions?
                  </Button>
                </Link>
              </div>
            </div>

            {/* Related Events */}
            <div className="mt-16 pt-12 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                More Events
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allEvents
                  .filter((e) => String(e.id) !== String(event.id))
                  .slice(0, 2)
                  .map((relatedEvent) => (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                    >
                      <div className="group rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden">
                        <div className="h-48 overflow-hidden bg-linear-to-br from-primary/10 to-accent/10">
                          <Image
                            src={getValidImageUrl(relatedEvent.image)}
                            alt={relatedEvent.title}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">
                            {relatedEvent.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {relatedEvent.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
