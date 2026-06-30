import type { Metadata } from "next";
import { metadataJoin } from "../../lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JoinHero } from "@/components/join/join-hero";
import { OurCommunityLinks } from "@/components/join/our-community-links";
import { CallForSpeakers } from "@/components/join/call-for-speakers";

export const metadata: Metadata = metadataJoin;

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <JoinHero />
        <div className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <OurCommunityLinks />
          </div>
        </div>
        <CallForSpeakers />
      </main>
      <Footer />
    </div>
  );
}
