import type { Metadata } from "next";
import { metadataContact } from "../../lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact/contact-hero";

export const metadata: Metadata = metadataContact;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
}
