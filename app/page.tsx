import { Footer } from "@/components/footer";
import { HomeHero } from "@/components/home/home-hero";
import { AboutOurCommunity } from "@/components/home/about-our-community";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { OurPartners } from "@/components/home/our-partners";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "AI Community Sri Lanka",
};

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
