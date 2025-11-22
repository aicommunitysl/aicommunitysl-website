import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutPreview } from "@/components/home/about-preview";
import { EventsPreview } from "@/components/home/events-preview";
import { PartnersSection } from "@/components/home/partners-section";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "AI Community Sri Lanka",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutPreview />
        <EventsPreview />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
