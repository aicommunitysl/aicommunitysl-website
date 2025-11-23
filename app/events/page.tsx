import type { Metadata } from "next";
import { metadataEvents } from "../../lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventsHero } from "@/components/events/events-hero";

export const metadata: Metadata = metadataEvents;

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <EventsHero />
      </main>
      <Footer />
    </div>
  );
}
