import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Community Sri Lanka - Connect & Collaborate",
  description:
    "Join the vibrant AI Community of Sri Lanka. Connect with AI enthusiasts, researchers, developers, and students. Explore events, workshops, and networking opportunities.",
  generator: "v0.app",
  keywords: [
    "AI",
    "Community",
    "Sri Lanka",
    "Machine Learning",
    "Technology",
    "Developers",
  ],
  authors: [{ name: "AI Community Sri Lanka" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aicommunity.lk",
    siteName: "AI Community Sri Lanka",
    title: "AI Community Sri Lanka - Connect & Collaborate",
    description:
      "Join the vibrant AI community of Sri Lanka. Connect with AI enthusiasts, researchers, developers, and students.",
    images: [
      {
        url: "https://placeholder.svg?height=1200&width=1200&query=AI%20Community%20Sri%20Lanka%20hero",
        width: 1200,
        height: 1200,
        alt: "AI Community Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Community Sri Lanka",
    description: "Join the vibrant AI community of Sri Lanka",
    creator: "@AICommunityLK",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://aicommunity.lk"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aicommunity.lk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
