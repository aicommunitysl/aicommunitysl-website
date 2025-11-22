"use client";

import { Target, Eye, Zap } from "lucide-react";
import { MISSION_VISION_VALUES } from "../../lib/constants";

export function MissionVisionValues() {
  const icons = [Target, Eye, Zap];
  const delayClasses = ["delay-0", "delay-1", "delay-2"];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MISSION_VISION_VALUES.map((section, index) => {
            const Icon = icons[index] ?? Target;
            const delayClass = delayClasses[index] ?? delayClasses[0];
            return (
              <div
                key={index}
                className={`p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg space-y-4 animate-fade-in ${delayClass}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
