import type { Metadata } from "next";

export const metadataHome: Metadata = {
  title: "AI Community Sri Lanka",
  description:
    "Welcome to AI Community Sri Lanka, your hub for AI enthusiasts, researchers, and developers. Join us to explore the latest in AI technology, attend events, and connect with the community.",
  openGraph: {
    title: "AI Community Sri Lanka",
    description:
      "Join AI Community Sri Lanka to explore the latest in AI technology, attend events, and connect with fellow enthusiasts.",
  },
};

export const metadataAbout: Metadata = {
  title: "About Us - AI Community Sri Lanka",
  description:
    "Learn about AI Community Sri Lanka, our mission, vision, team members, and our journey to build the vibrant AI ecosystem in Sri Lanka.",
  openGraph: {
    title: "About Us - AI Community Sri Lanka",
    description:
      "Learn about our mission, vision, and the team behind AI Community Sri Lanka.",
  },
};

export const metadataContact: Metadata = {
  title: "Contact Us - AI Community Sri Lanka",
  description:
    "Get in touch with AI Community Sri Lanka. Contact us for questions, partnership opportunities, or event inquiries.",
  openGraph: {
    title: "Contact Us - AI Community Sri Lanka",
    description: "Get in touch with our community.",
  },
};

export const metadataEvents: Metadata = {
  title: "Events - AI Community Sri Lanka",
  description:
    "Explore our upcoming AI workshops, meetups, conferences, and networking events. Join our thriving community events and connect with AI enthusiasts.",
  openGraph: {
    title: "Events - AI Community Sri Lanka",
    description: "Explore our upcoming AI events, workshops, and conferences.",
  },
};

export const metadataEventDetails: Metadata = {
  title: "Event Details - AI Community Sri Lanka",
  description: "View detailed information about our AI community events.",
};

export const metadataJoin: Metadata = {
  title: "Join Us - AI Community Sri Lanka",
  description:
    "Join AI Community Sri Lanka and connect with 2000+ AI enthusiasts. Follow us on GitHub, LinkedIn, Facebook, Instagram, X, and TikTok.",
  openGraph: {
    title: "Join Us - AI Community Sri Lanka",
    description: "Join our vibrant AI community.",
  },
};

export const metadataPrivacyPolicy: Metadata = {
  title: "Privacy Policy - AI Community Sri Lanka",
  description:
    "Read the Privacy Policy of AI Community Sri Lanka to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy - AI Community Sri Lanka",
    description:
      "Read our Privacy Policy to understand how we handle your data.",
  },
};

export const metadataTermsOfService: Metadata = {
  title: "Terms of Service - AI Community Sri Lanka",
  description:
    "Read the Terms of Service of AI Community Sri Lanka to understand the rules and regulations for using our website and services.",
  openGraph: {
    title: "Terms of Service - AI Community Sri Lanka",
    description:
      "Read our Terms of Service to understand the rules for using our platform.",
  },
};

export const metadataApp: Metadata = {
  title: "AI Community Sri Lanka",
  description:
    "Join thousands of AI enthusiasts, researchers, developers, and students. Explore cutting-edge AI technologies, attend workshops, network with experts, and shape the future of AI in Sri Lanka.",
  keywords: [
    "AI",
    "Community",
    "Sri Lanka",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Tech Community",
    "Technology",
    "Developers",
  ],
  authors: [{ name: "AI Community Sri Lanka" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aicommunity.lk",
    siteName: "AI Community Sri Lanka",
    title: "AI Community Sri Lanka",
    description:
      "Join thousands of AI enthusiasts, researchers, developers, and students. Explore cutting-edge AI technologies, attend workshops, network with experts, and shape the future of AI in Sri Lanka.",
    images: [
      {
        url: "https://github.com/aicommunitysl/.github/raw/main/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "AI Community Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Community Sri Lanka",
    description:
      "Join thousands of AI enthusiasts, researchers, developers, and students. Explore cutting-edge AI technologies, attend workshops, network with experts, and shape the future of AI in Sri Lanka.",
    creator: "@aicommunitysl",
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
