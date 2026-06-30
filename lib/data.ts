import eventsData from "@/data/events.json";
import milestonesData from "@/data/milestones.json";
import partnersData from "@/data/partners.json";
import socialLinksData from "@/data/social-links.json";
import teamData from "@/data/team.json";
import {
  EventExtended,
  Milestone,
  Partner,
  Session,
  SocialLink,
  TeamMemberExtended,
} from "./types";
import { formatEventDate, formatEventTime } from "./utils";

interface EventRecord {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  event_type?: string;
  image_url?: string | null;
  registration_url?: string | null;
  speakers?: { name: string; role?: string | null; image_url?: string | null }[];
  sessions?: Session[];
}

interface PartnerRecord {
  name: string;
  logo_url?: string | null;
}

interface TeamMemberRecord {
  id: string;
  name: string;
  role: string;
  bio?: string | null;
  image_url?: string | null;
  social_links?: {
    linkedin?: string | null;
    twitter?: string | null;
    github?: string | null;
    website?: string | null;
  } | null;
  is_active?: boolean;
  team_category?: string | null;
  display_order?: number;
}

interface MilestoneRecord {
  title: string;
  description: string;
  date: string;
}

interface SocialLinkRecord {
  name: string;
  url: string;
  icon?: string | null;
  handler?: string | null;
  display_order?: number;
}

const EVENTS: EventRecord[] = eventsData as EventRecord[];
const PARTNERS: PartnerRecord[] = partnersData as PartnerRecord[];
const TEAM_MEMBERS: TeamMemberRecord[] = teamData as TeamMemberRecord[];
const MILESTONES: MilestoneRecord[] = milestonesData as MilestoneRecord[];
const SOCIAL_LINKS: SocialLinkRecord[] = socialLinksData as SocialLinkRecord[];

function mapEvent(event: EventRecord): EventExtended {
  return {
    id: event.id,
    title: event.title,
    date: formatEventDate(event.date),
    time: formatEventTime(event.date),
    location: event.location,
    description: event.description || "",
    image: event.image_url || "/placeholder.svg",
    category: event.event_type || "Event",
    link: event.registration_url || "#",
    isUpcoming: new Date(event.date) >= new Date(),
    details: event.description,
    speakers: (event.speakers || []).map((speaker) => ({
      name: speaker.name,
      role: speaker.role || undefined,
      image: speaker.image_url || "/placeholder.svg",
    })),
    sessions: event.sessions || [],
  };
}

export function getEvents(
  upcoming: boolean = false,
  limit?: number
): EventExtended[] {
  const now = new Date();
  const filteredEvents = EVENTS.filter((event) =>
    upcoming ? new Date(event.date) >= now : true
  ).sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    return upcoming ? first - second : second - first;
  });

  const mappedEvents = filteredEvents.map(mapEvent);
  return typeof limit === "number" ? mappedEvents.slice(0, limit) : mappedEvents;
}

export function getEventById(id: string): EventExtended | null {
  const event = EVENTS.find((item) => String(item.id) === String(id));
  return event ? mapEvent(event) : null;
}

export function getPartners(): Partner[] {
  return PARTNERS.map((partner) => ({
    name: partner.name,
    logo: partner.logo_url || "/placeholder.svg",
  }));
}

export function getTeam(): TeamMemberExtended[] {
  return TEAM_MEMBERS.filter((member) => member.is_active !== false)
    .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
    .map((member) => ({
      id: member.id,
      name: member.name,
      role: member.role,
      description: member.bio || "",
      image: member.image_url || "/placeholder.svg",
      social_links: member.social_links
        ? {
            linkedin: member.social_links.linkedin || undefined,
            twitter: member.social_links.twitter || undefined,
            github: member.social_links.github || undefined,
            website: member.social_links.website || undefined,
          }
        : undefined,
      team_category: member.team_category || "General",
      is_active: member.is_active !== false,
      display_order: member.display_order || 0,
    }));
}

export function getMilestones(): Milestone[] {
  return MILESTONES.map((milestone) => {
    const year = new Date(milestone.date).getFullYear();

    return {
      year: Number.isNaN(year) ? "" : String(year),
      title: milestone.title,
      description: milestone.description,
    };
  });
}

export function getSocialLinks(): SocialLink[] {
  return [...SOCIAL_LINKS]
    .sort(
    (a, b) => (a.display_order || 0) - (b.display_order || 0)
    )
    .map((link) => ({
      name: link.name,
      url: link.url,
      icon: link.icon || undefined,
      handler: link.handler || undefined,
    }));
}
