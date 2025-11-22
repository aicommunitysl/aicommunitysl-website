import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVisionValues } from "@/components/about/mission-vision-values";
import { OurStory } from "@/components/about/our-story";

export const metadata: Metadata = {
  title: "About Us - AI Community Sri Lanka",
  description:
    "Learn about AI Community Sri Lanka, our mission, vision, team members, and our journey to build the vibrant AI ecosystem in Sri Lanka.",
  openGraph: {
    title: "About Us - AI Community Sri Lanka",
    description:
      "Learn about our mission, vision, and the team behind AI Community Sri Lanka.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <AboutHero />
        <MissionVisionValues />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
