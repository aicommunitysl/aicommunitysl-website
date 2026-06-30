import type {
  NavigationItem,
  GlobalAIInfo,
  MissionVisionValue,
} from "./types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Join", href: "/join" },
];

export const GLOBAL_AI_INFO: GlobalAIInfo = {
  name: "Global AI Colombo",
  description:
    "We are proud to be a chapter of the Global AI Community. As part of this international network, we conduct various events including Global AI Bootcamps each year. Our partnership enables us to bring world-class learning opportunities and connect our local community with the global AI movement.",
  link: "https://globalai.community/chapters/colombo/",
  buttonText: "View Chapter",
};

export const MISSION_VISION_VALUES: MissionVisionValue[] = [
  {
    title: "Our Mission",
    content: [
      "To empower and connect AI professionals, researchers, students, and enthusiasts in Sri Lanka",
      "To foster knowledge sharing, collaboration, and innovation in the AI field",
      "To bridge the gap between academia, industry, and the startup ecosystem",
      "To make advanced AI education and resources accessible to everyone",
    ],
  },
  {
    title: "Our Vision",
    content: [
      "A thriving AI ecosystem where Sri Lanka becomes a regional hub for AI innovation",
      "A community where talent is nurtured, ideas are shared, and groundbreaking solutions are created",
      "An inclusive space where people from all backgrounds can learn, grow, and contribute to the AI revolution",
      "Sri Lanka recognized globally for its contributions to AI research and development",
    ],
  },
  {
    title: "Our Values",
    content: [
      "Community-driven: We believe in the power of collective growth and support",
      "Knowledge-sharing: Open exchange of ideas and learning resources",
      "Innovation-focused: Encouraging experimentation and creative thinking",
      "Inclusive and welcoming: Diversity strengthens our community",
    ],
  },
];
