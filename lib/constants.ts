import type {
  NavigationItem,
  SocialLink,
  EventExtended,
  Partner,
  GlobalAIInfo,
  MissionVisionValue,
  Milestone,
  TeamMemberExtended,
} from "./types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Join", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Website",
    url: "https://aicommunitysl.lk",
    icon: "Website",
    handler: "aicommunitysl.lk",
  },
  {
    name: "Email",
    url: "mailto:contact@aicommunitysl.lk",
    icon: "Email",
    handler: "contact@aicommunitysl.lk",
  },
  {
    name: "GitHub",
    url: "https://github.com/aicommunitysl",
    icon: "GitHub",
    handler: "aicommunitysl",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/aicommunitysl",
    icon: "Linkedin",
    handler: "aicommunitysl",
  },
  {
    name: "Facebook Group",
    url: "https://facebook.com/groups/aicommunitysl",
    icon: "Facebook",
    handler: "aicommunitysl",
  },
  {
    name: "Facebook Page",
    url: "https://facebook.com/aicommunitysl",
    icon: "Facebook",
    handler: "aicommunitysl",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/aicommunitysl",
    icon: "Instagram",
    handler: "@aicommunitysl",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/aicommunitysl",
    icon: "X",
    handler: "@aicommunitysl",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@aicommunitysl",
    icon: "TikTok",
    handler: "@aicommunitysl",
  },
];

export const EVENTS: EventExtended[] = [
  {
    id: 1,
    title: "AI Fundamentals Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "Colombo, Sri Lanka",
    description:
      "Learn the basics of AI and machine learning from industry experts.",
    image: "/placeholder.svg",
    category: "Workshop",
    link: "#",
    isUpcoming: true,
    details:
      "This comprehensive workshop covers AI fundamentals including supervised learning, unsupervised learning, and practical applications. Learn from industry experts with hands-on exercises.",
    speakers: [
      {
        name: "Speaker 1",
        role: "AI Researcher & Entrepreneur",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 2",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Introduction to Machine Learning",
        time: "10:00 AM - 11:00 AM",
        speaker: "Speaker 1",
        description: "Overview of ML concepts and real-world applications",
      },
      {
        title: "Hands-on: Building Your First Model",
        time: "11:00 AM - 12:30 PM",
        speaker: "Speaker 2",
        description: "Practical exercise using Python and Scikit-learn",
      },
      {
        title: "Q&A and Networking",
        time: "12:30 PM - 1:00 PM",
        speaker: "Both Speakers",
        description: "Open discussion and community networking",
      },
    ],
  },
  {
    id: 2,
    title: "Deep Learning Symposium",
    date: "January 20, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Kandy, Sri Lanka",
    description:
      "Dive deep into neural networks and advanced deep learning techniques.",
    image: "/placeholder.svg",
    category: "Conference",
    link: "#",
    isUpcoming: true,
    details:
      "Join us for an in-depth exploration of neural networks, convolutional networks, recurrent networks, and transformers. Perfect for intermediate to advanced practitioners.",
    speakers: [
      {
        name: "Speaker 1",
        role: "AI Researcher & Entrepreneur",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 2",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 3",
        role: "Tech Writer & Educator",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Neural Networks Fundamentals",
        time: "9:00 AM - 10:30 AM",
        speaker: "Speaker 2",
        description: "Deep dive into neural network architecture and training",
      },
      {
        title: "Convolutional Neural Networks (CNN)",
        time: "10:45 AM - 12:15 PM",
        speaker: "Speaker 1",
        description: "Image processing and computer vision applications",
      },
      {
        title: "Lunch Break",
        time: "12:15 PM - 1:15 PM",
        speaker: "Break",
        description: "Networking and refreshments",
      },
      {
        title: "Transformers and Large Language Models",
        time: "1:15 PM - 3:00 PM",
        speaker: "Speaker 3",
        description: "Modern deep learning architectures and NLP",
      },
      {
        title: "Panel Discussion: Future of Deep Learning",
        time: "3:00 PM - 5:00 PM",
        speaker: "All Speakers",
        description: "Expert insights and community questions",
      },
    ],
  },
  {
    id: 3,
    title: "AI Meetup: Natural Language Processing",
    date: "January 10, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Colombo, Sri Lanka",
    description:
      "Explore NLP applications and latest advancements in language models.",
    image: "/placeholder.svg",
    category: "Meetup",
    link: "#",
    isUpcoming: true,
    details:
      "Discover the latest trends in Natural Language Processing, including transformer models, large language models, and real-world NLP applications.",
    speakers: [
      {
        name: "Speaker 3",
        role: "Tech Writer & Educator",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "NLP Trends in 2025",
        time: "6:00 PM - 6:45 PM",
        speaker: "Speaker 3",
        description: "Latest developments in language models and NLP",
      },
      {
        title: "Real-world NLP Applications",
        time: "6:45 PM - 7:30 PM",
        speaker: "Speaker 3",
        description: "Case studies and practical implementations",
      },
      {
        title: "Open Discussion & Networking",
        time: "7:30 PM - 8:00 PM",
        speaker: "Speaker 3 & Audience",
        description: "Q&A and community connection",
      },
    ],
  },
  {
    id: 4,
    title: "Data Science Career Panel",
    date: "December 22, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Virtual",
    description: "Expert panel discussing career paths in AI and data science.",
    image: "/placeholder.svg",
    category: "Panel",
    link: "#",
    isUpcoming: true,
    details:
      "Get insights from leading professionals in AI and data science about career opportunities, skills needed, and industry trends.",
    speakers: [
      {
        name: "Speaker 1",
        role: "AI Researcher & Entrepreneur",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 4",
        role: "Events Coordinator",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 2",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Panel: Career Paths in AI",
        time: "4:00 PM - 5:30 PM",
        speaker: "Speaker 1, Speaker 2, Speaker 4",
        description: "Professionals share their career journeys and insights",
      },
      {
        title: "Audience Q&A",
        time: "5:30 PM - 6:00 PM",
        speaker: "All Panelists",
        description: "Answer questions from the community",
      },
    ],
  },
  {
    id: 5,
    title: "Python for AI Development",
    date: "November 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Colombo, Sri Lanka",
    description:
      "Master Python programming for AI and machine learning development.",
    image: "/placeholder.svg",
    category: "Workshop",
    link: "#",
    isUpcoming: false,
    details:
      "A practical workshop that taught Python fundamentals specifically for AI development, covering libraries like NumPy, Pandas, Scikit-learn, and TensorFlow.",
    speakers: [
      {
        name: "Speaker 2",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Python Essentials for AI",
        time: "2:00 PM - 3:00 PM",
        speaker: "Speaker 2",
        description: "Core Python concepts for AI development",
      },
      {
        title: "NumPy and Pandas Deep Dive",
        time: "3:00 PM - 4:00 PM",
        speaker: "Speaker 2",
        description: "Working with data structures and manipulation",
      },
      {
        title: "Scikit-learn and TensorFlow Introduction",
        time: "4:00 PM - 5:00 PM",
        speaker: "Speaker 2",
        description: "Building and training ML models",
      },
    ],
  },
  {
    id: 6,
    title: "AI Ethics & Responsible AI",
    date: "October 28, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Kandy, Sri Lanka",
    description:
      "Exploring ethical considerations in AI development and deployment.",
    image: "/placeholder.svg",
    category: "Conference",
    link: "#",
    isUpcoming: false,
    details:
      "This conference focused on important ethical considerations, bias detection, fairness in AI systems, and responsible AI deployment practices.",
    speakers: [
      {
        name: "Speaker 1",
        role: "AI Researcher & Entrepreneur",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 3",
        role: "Tech Writer & Educator",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Ethical Foundations of AI",
        time: "10:00 AM - 11:30 AM",
        speaker: "Speaker 1",
        description: "Understanding ethical principles in AI",
      },
      {
        title: "Bias Detection and Fairness",
        time: "11:30 AM - 1:00 PM",
        speaker: "Speaker 3",
        description: "Identifying and mitigating bias in AI systems",
      },
      {
        title: "Lunch Break",
        time: "1:00 PM - 2:00 PM",
        speaker: "Break",
        description: "Networking and lunch",
      },
      {
        title: "Responsible AI Deployment",
        time: "2:00 PM - 3:30 PM",
        speaker: "Speaker 1",
        description: "Best practices for ethical AI in production",
      },
      {
        title: "Closing Panel",
        time: "3:30 PM - 4:00 PM",
        speaker: "Both Speakers",
        description: "Final thoughts and takeaways",
      },
    ],
  },
  {
    id: 7,
    title: "Computer Vision Meetup",
    date: "October 10, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Colombo, Sri Lanka",
    description: "Latest trends in computer vision and image processing.",
    image: "/placeholder.svg",
    category: "Meetup",
    link: "#",
    isUpcoming: false,
    details:
      "Community meetup discussing computer vision applications, object detection, image classification, and emerging technologies in visual AI.",
    speakers: [
      {
        name: "Speaker 2",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 3",
        role: "Tech Writer & Educator",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Computer Vision Fundamentals",
        time: "7:00 PM - 7:45 PM",
        speaker: "Speaker 2",
        description: "Core concepts in image processing and vision",
      },
      {
        title: "Advanced Applications",
        time: "7:45 PM - 8:30 PM",
        speaker: "Speaker 3",
        description: "Real-world projects and emerging technologies",
      },
      {
        title: "Networking & Discussion",
        time: "8:30 PM - 9:00 PM",
        speaker: "Both Speakers & Audience",
        description: "Community engagement and questions",
      },
    ],
  },
  {
    id: 8,
    title: "Industry Leaders Panel Discussion",
    date: "September 20, 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual",
    description: "Leading AI practitioners share their journey and insights.",
    image: "/placeholder.svg",
    category: "Panel",
    link: "#",
    isUpcoming: false,
    details:
      "A panel of industry leaders discussed their experiences building AI products, scaling teams, and navigating the rapidly evolving AI landscape.",
    speakers: [
      {
        name: "Speaker 1",
        role: "AI Researcher & Entrepreneur",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 4",
        role: "Events Coordinator",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 2",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg",
      },
      {
        name: "Speaker 3",
        role: "Tech Writer & Educator",
        image: "/placeholder.svg",
      },
    ],
    sessions: [
      {
        title: "Industry Leaders Share Their Journey",
        time: "3:00 PM - 4:15 PM",
        speaker: "All Panelists",
        description: "Personal stories and professional insights",
      },
      {
        title: "Q&A and Insights",
        time: "4:15 PM - 5:00 PM",
        speaker: "All Panelists & Audience",
        description: "Audience questions and community interaction",
      },
    ],
  },
];

export const PARTNERS: Partner[] = [
  { name: "Organization 1", logo: "/placeholder.svg" },
  { name: "Organization 2", logo: "/placeholder.svg" },
  { name: "Organization 3", logo: "/placeholder.svg" },
];

export const GLOBAL_AI_INFO: GlobalAIInfo = {
  name: "Global AI Colombo",
  description:
    "We are proud to be a chapter of the Global AI Community. As part of this international network, we conduct various events including Global AI Bootcamps each year. Our partnership enables us to bring world-class learning opportunities and connect our local community with the global AI movement.",
  link: "https://www.globalai.community/",
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

export const MILESTONES: Milestone[] = [
  {
    year: "2020",
    title: "Community Founded",
    description:
      "A small group of AI enthusiasts came together with a vision to build a thriving AI community in Sri Lanka.",
  },
  {
    year: "2021",
    title: "First Event Hosted",
    description:
      "Organized our first AI workshop with 100+ participants and established university partnerships.",
  },
  {
    year: "2022",
    title: "Rapid Growth",
    description:
      "Community grew to 500+ members, hosted 12+ events, and launched our mentorship program.",
  },
  {
    year: "2023",
    title: "Regional Impact",
    description:
      "Expanded to 1000+ members, collaborated with international AI organizations, and started industry partnerships.",
  },
  {
    year: "2024",
    title: "Ecosystem Leader",
    description:
      "Reached 2000+ community members, hosted 50+ events, and became the go-to hub for AI innovation.",
  },
];

export const TEAM_MEMBERS: TeamMemberExtended[] = [
  {
    id: 1,
    name: "Team Member One",
    role: "Community Lead",
    description: "AI researcher and entrepreneur",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
    speakers: true,
  },
  {
    id: 2,
    name: "Team Member Two",
    role: "Events Coordinator",
    description: "Passionate about community building",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
    speakers: true,
  },
  {
    id: 3,
    name: "Team Member Three",
    role: "Technical Lead",
    description: "Machine Learning Engineer",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
    speakers: true,
  },
  {
    id: 4,
    name: "Team Member Four",
    role: "Content Lead",
    description: "Tech writer and educator",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
    speakers: true,
  },
];
