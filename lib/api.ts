import {
  EventExtended,
  Partner,
  TeamMemberExtended,
  Milestone,
  SocialLink,
  Session,
} from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`API call failed: ${res.statusText}`);
  }

  return res.json();
}

// Events
interface EventAPI {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  event_type?: string;
  image_url?: string;
  registration_url?: string;
  speakers?: { name: string; role?: string; image_url?: string }[];
  sessions?: Session[];
}

export async function getEvents(
  upcoming: boolean = false,
  limit?: number
): Promise<EventExtended[]> {
  try {
    const endpoint = upcoming ? "/events/upcoming/list" : "/events/";
    const url = limit ? `${endpoint}?limit=${limit}` : endpoint;
    const data = await fetchAPI<{ events: EventAPI[] }>(url, {
      cache: "no-store",
    });

    // Map API response to frontend types if necessary
    return data.events.map((event) => ({
      id: event.id,
      title: event.title,
      date: new Date(event.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time:
        event.time ||
        new Date(event.date).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      location: event.location,
      description: event.description || "",
      image: event.image_url || "/placeholder.svg", // Fallback image
      category: event.event_type || "Event",
      link: event.registration_url || "#",
      isUpcoming: upcoming ? true : new Date(event.date) >= new Date(), // approximate for mixed list
      details: event.description, // Using description as details for now
      speakers: (event.speakers || []).map((s) => ({
        name: s.name,
        role: s.role,
        image: s.image_url || "/placeholder.svg",
      })),
      sessions: event.sessions || [],
    }));
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
}

export async function getEventById(id: string): Promise<EventExtended | null> {
  try {
    const data = await fetchAPI<EventAPI>(`/events/${id}`, {
      cache: "no-store",
    });

    // Map API response to frontend types
    return {
      id: data.id,
      title: data.title,
      date: new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time:
        data.time ||
        new Date(data.date).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      location: data.location,
      description: data.description || "",
      image: data.image_url || "/placeholder.svg",
      category: data.event_type || "Event",
      link: data.registration_url || "#",
      isUpcoming: new Date(data.date) >= new Date(),
      details: data.description,
      speakers: (data.speakers || []).map((s) => ({
        name: s.name,
        role: s.role,
        image: s.image_url || "/placeholder.svg",
      })),
      sessions: data.sessions || [],
    };
  } catch (error) {
    console.error(`Failed to fetch event ${id}:`, error);
    return null;
  }
}

// Partners
interface PartnerAPI {
  name: string;
  logo_url?: string;
}

export async function getPartners(): Promise<Partner[]> {
  try {
    const data = await fetchAPI<{ partners: PartnerAPI[] }>("/partners/", {
      cache: "no-store",
    });
    return data.partners.map((p) => ({
      name: p.name,
      logo: p.logo_url || "/placeholder.svg",
    }));
  } catch (error) {
    console.error("Failed to fetch partners:", error);
    return [];
  }
}

// Team
interface TeamMemberAPI {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  is_speaker?: boolean;
}

export async function getTeam(): Promise<TeamMemberExtended[]> {
  try {
    const data = await fetchAPI<{ members: TeamMemberAPI[] }>("/team/", {
      cache: "no-store",
    });
    return data.members.map((m) => ({
      id: m.id,
      name: m.name,
      role: m.role,
      description: m.bio || "",
      image: m.image_url || "/placeholder.svg",
      linkedin: m.linkedin_url || "#",
      speakers: m.is_speaker,
    }));
  } catch (error) {
    console.error("Failed to fetch team:", error);
    return [];
  }
}

// Milestones
interface MilestoneAPI {
  year: string;
  title: string;
  description: string;
}

export async function getMilestones(): Promise<Milestone[]> {
  try {
    const data = await fetchAPI<{ milestones: MilestoneAPI[] }>(
      "/milestones/",
      { cache: "no-store" }
    );
    return data.milestones.map((m) => ({
      year: m.year,
      title: m.title,
      description: m.description,
    }));
  } catch (error) {
    console.error("Failed to fetch milestones:", error);
    return [];
  }
}

// Social Links (Footer etc)
interface SocialLinkAPI {
  name: string;
  url: string;
  icon?: string;
  handler?: string;
  display_order?: number;
  is_active?: boolean;
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    const data = await fetchAPI<{ links: SocialLinkAPI[] }>("/social/", {
      cache: "no-store",
    });
    return data.links.map((l) => ({
      name: l.name,
      url: l.url,
      icon: l.icon,
      handler: l.handler,
    }));
  } catch (error) {
    console.error("Failed to fetch social links:", error);
    return [];
  }
}
