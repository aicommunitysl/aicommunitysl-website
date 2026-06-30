export interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  description: string;
  image: string;
  social_links?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  team_category: string;
  is_active: boolean;
  display_order: number;
}

export interface Event {
  id: string | number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export interface Partner {
  name: string;
  logo: string;
}

// New interfaces
export interface Speaker {
  name: string;
  role?: string;
  image?: string;
}

export interface Session {
  title: string;
  time: string;
  speaker?: string;
  description?: string;
}

export interface EventExtended extends Event {
  time?: string;
  isUpcoming?: boolean;
  details?: string;
  speakers?: Speaker[];
  sessions?: Session[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  handler?: string;
}

export interface GlobalAIInfo {
  name: string;
  description: string;
  link: string;
  buttonText: string;
}

export interface MissionVisionValue {
  title: string;
  content: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

// make TeamMember extendable for optional flags
export interface TeamMemberExtended extends TeamMember {
  speakers?: boolean;
}
