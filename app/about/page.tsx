import type { Metadata } from "next";
import { metadataAbout } from "../../lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVisionValues } from "@/components/about/mission-vision-values";
import { OurStory } from "@/components/about/our-story";
import { OurJourney } from "@/components/about/our-journey";
import { MeetOurTeam } from "@/components/about/meet-our-team";

export const metadata: Metadata = metadataAbout;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <AboutHero />
        <MissionVisionValues />
        <OurStory />
        <OurJourney />
        <MeetOurTeam />
      </main>
      <Footer />
    </div>
  );
}
