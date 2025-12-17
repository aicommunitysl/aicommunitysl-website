"use client";

import type React from "react";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/constants";
import { getSocialLinks } from "@/lib/api";
import { SocialLink } from "@/lib/types";
import { useEffect, useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Website: <FaGlobe size={24} />,
  Email: <FaEnvelope size={24} />,
  GitHub: <FaGithub size={24} />,
  Linkedin: <FaLinkedinIn size={24} />,
  Facebook: <FaFacebookF size={24} />,
  Instagram: <FaInstagram size={24} />,
  TikTok: <FaTiktok size={24} />,
  X: <FaXTwitter size={24} />,
};

export function OurCommunityLinks() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getSocialLinks();
      setSocialLinks(data);
    }
    fetchData();
  }, []);

  return (
    <div className="space-y-8 animate-fade-in delay-1">
      <div className="space-y-4">
        <h2 className="font-bold text-foreground text-center text-4xl">
          Our Community Links
        </h2>
        <p className="text-muted-foreground px-36 text-center">
          You can join our community by following us on these platforms. Connect
          with 2000+ AI enthusiasts and stay updated with the latest events and
          discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((platform, index) => (
          <Link
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="h-full p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-center cursor-pointer">
              <div className="text-primary group-hover:scale-110 transition-transform">
                {iconMap[platform.icon ?? "Website"] ?? <FaGlobe size={24} />}
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {platform.handler}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
        <div className="text-center p-4 py-4 px-4">
          <p className="font-bold text-primary text-3xl">2000+</p>
          <p className="text-muted-foreground text-lg">Community Members</p>
        </div>
        <div className="text-center p-4">
          <p className="font-bold text-secondary-foreground text-3xl">50+</p>
          <p className="text-muted-foreground text-lg">Event Sessions</p>
        </div>
      </div>
    </div>
  );
}
