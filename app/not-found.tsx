"use client";

import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] items-center justify-center px-4 py-16">
        <div className="max-w-[760px] text-center">
          <div className="animate-404-enter">
            <h1 className="m-0 text-[8rem] font-bold leading-none text-primary">
              4<span className="animate-404-zero">0</span>4
            </h1>
          </div>

          <div className="animate-404-content">
            <h2 className="mt-4 text-[2rem] font-bold">Page Not Found</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We couldn&apos;t find the page you were looking for. It may have
              been moved or deleted.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/">Go to homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
