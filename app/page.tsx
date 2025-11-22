import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutPreview } from "@/components/home/about-preview";
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
      </main>
      <Footer />
    </div>
  );
}
