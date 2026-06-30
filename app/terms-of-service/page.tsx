import type { Metadata } from "next";
import { metadataTermsOfService } from "../../lib/metadata";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = metadataTermsOfService;

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12 md:py-20">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                These Terms of Service constitute a legally binding agreement
                made between you, whether personally or on behalf of an entity
                (&quot;you&quot;) and AI Community Sri Lanka (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), concerning your access to
                and use of the aicommunity.lk website as well as any other media
                form, media channel, mobile website or mobile application
                related, linked, or otherwise connected thereto (collectively,
                the &quot;Site&quot;).
              </p>
              <p className="mt-2">
                You agree that by accessing the Site, you have read, understood,
                and agreed to be bound by all of these Terms of Service. If you
                do not agree with all of these Terms of Service, then you are
                expressly prohibited from using the Site and you must
                discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the &quot;Content&quot;) and the trademarks,
                service marks, and logos contained therein (the
                &quot;Marks&quot;) are owned or controlled by us or licensed to
                us, and are protected by copyright and trademark laws and
                various other intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. User Representations
              </h2>
              <p>By using the Site, you represent and warrant that:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  All registration information you submit will be true,
                  accurate, current, and complete.
                </li>
                <li>
                  You will maintain the accuracy of such information and
                  promptly update such registration information as necessary.
                </li>
                <li>
                  You have the legal capacity and you agree to comply with these
                  Terms of Service.
                </li>
                <li>
                  You are not a minor in the jurisdiction in which you reside.
                </li>
                <li>
                  You will not access the Site through automated or non-human
                  means, whether through a bot, script, or otherwise.
                </li>
                <li>
                  You will not use the Site for any illegal or unauthorized
                  purpose.
                </li>
                <li>
                  Your use of the Site will not violate any applicable law or
                  regulation.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Prohibited Activities
              </h2>
              <p>
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                used in connection with any commercial endeavors except those
                that are specifically endorsed or approved by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Community Guidelines
              </h2>
              <p>
                As a community-driven platform, we expect all users to adhere to
                our Code of Conduct. We reserve the right to remove any content
                or terminate accounts that violate our community standards,
                including but not limited to harassment, hate speech, or spam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Modifications and Interruptions
              </h2>
              <p>
                We reserve the right to change, modify, or remove the contents
                of the Site at any time or for any reason at our sole discretion
                without notice. We also reserve the right to modify or
                discontinue all or part of the Site without notice at any time.
                We will not be liable to you or any third party for any
                modification, price change, suspension, or discontinuance of the
                Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
              <p>
                These Terms shall be governed by and defined following the laws
                of Sri Lanka. AI Community Sri Lanka and yourself irrevocably
                consent that the courts of Sri Lanka shall have exclusive
                jurisdiction to resolve any dispute which may arise in
                connection with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive
                further information regarding use of the Site, please contact us
                at:
              </p>
              <p className="mt-2">
                <strong>AI Community Sri Lanka</strong>
                <br />
                Email: contact@aicommunity.lk
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
