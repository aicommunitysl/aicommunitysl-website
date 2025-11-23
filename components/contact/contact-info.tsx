"use client";

import Link from "next/link";
import { FiMail as Mail, FiPhone as Phone } from "react-icons/fi";
import {
  FaGlobe,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { SOCIAL_LINKS } from "@/lib/constants";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@aicommunity.lk",
      link: "mailto:contact@aicommunity.lk",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 (0) 11 XXX XXXX",
      link: "tel:+94112345678",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in delay-1">
      {/* Contact Details */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">
          Contact Information
        </h3>
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Icon size={18} />
                <span className="text-sm font-semibold">{detail.label}</span>
              </div>
              {detail.link ? (
                <Link
                  href={detail.link}
                  className="text-muted-foreground hover:text-primary transition-colors wrap-break-words"
                >
                  {detail.value}
                </Link>
              ) : (
                <p className="text-muted-foreground">{detail.value}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Social Links — Icon Only Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>

        {/** Map string keys from `SOCIAL_LINKS` to actual icon components */}
        <div className="mt-2">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
            {SOCIAL_LINKS.filter(
              (p) =>
                ![
                  "Website",
                  "Email",
                  "GitHub",
                  "Facebook Group",
                  "TikTok",
                ].includes(p.name)
            ).map((platform) => {
              const iconMap = {
                Website: <FaGlobe size={20} />,
                Email: <FaEnvelope size={20} />,
                GitHub: <FaGithub size={20} />,
                Linkedin: <FaLinkedin size={20} />,
                Facebook: <FaFacebook size={20} />,
                Instagram: <FaInstagram size={20} />,
                X: <FaXTwitter size={20} />,
                TikTok: <FaTiktok size={20} />,
              };

              return (
                <Link
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  title={platform.name}
                  className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md hover:bg-primary/5 transition-all flex items-center justify-center text-primary"
                >
                  {iconMap[
                    (platform.icon ?? "Website") as keyof typeof iconMap
                  ] ?? <FaGlobe size={20} />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="space-y-2 p-4 rounded-lg bg-muted">
        <h3 className="text-sm font-semibold text-foreground">Response Time</h3>
        <p className="text-xs text-muted-foreground">
          We typically respond to emails within 24-48 hours during business
          days.
        </p>
      </div>
    </div>
  );
}
