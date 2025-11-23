import type { Metadata } from "next";
import { metadataHome } from "../lib/metadata";
import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/home-hero";
import { AboutOurCommunity } from "@/components/home/about-our-community";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { OurPartners } from "@/components/home/our-partners";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = metadataHome;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HomeHero />
        <AboutOurCommunity />
        <UpcomingEvents />
        <OurPartners />
      </main>
      <Footer />
    </div>
  );
}
