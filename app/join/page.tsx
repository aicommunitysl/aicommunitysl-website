import type { Metadata } from "next";
import { metadataJoin } from "../../lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JoinHero } from "@/components/join/join-hero";

export const metadata: Metadata = metadataJoin;

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <JoinHero />
      </main>
      <Footer />
    </div>
  );
}
