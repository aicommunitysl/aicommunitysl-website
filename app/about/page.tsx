import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold">
            About
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
