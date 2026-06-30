"use client";

import Link from "next/link";
// replaced lucide-react icons with react-icons/fi
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { getSocialLinks } from "@/lib/data";
import Image from "next/image";
import { IconType } from "react-icons";
import { FiGlobe, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = getSocialLinks();

  const ICON_MAP: Record<string, IconType> = {
    Website: FiGlobe,
    Email: FiMail,
    GitHub: FaGithub,
    Linkedin: FaLinkedinIn,
    Facebook: FaFacebookF,
    Instagram: FaInstagram,
    X: FaXTwitter,
    TikTok: SiTiktok,
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center space-x-2 font-bold text-lg"
              >
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="inline text-foreground">
                  AI Community Sri Lanka{" "}
                </span>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering Sri Lanka&#39;s AI Community: Connecting Minds, Shaping
              the Future
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <FiMail size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  {socialLinks.find((link) => link.name === "Email")?.handler}
                </span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <FiMapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Colombo, Sri Lanka
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.filter(
                (link) =>
                  !["Website", "Email", "Facebook Group", "TikTok"].includes(
                    link.name
                  )
              ).map((link) => {
                const key = link.icon ?? link.name;
                const Icon = ICON_MAP[key];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center text-sm font-semibold text-primary"
                    aria-label={link.name}
                  >
                    {Icon ? (
                      <Icon size={16} />
                    ) : link.icon ? (
                      link.icon.charAt(0)
                    ) : (
                      link.name.charAt(0)
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} AI Community Sri Lanka - All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
