"use client";

import { GraduationCap, Users, Briefcase, Target } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { HIGHLIGHTS_SECTION, HIGHLIGHTS } from "@/lib/constants";
import type { Highlight } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GraduationCap,
  Users,
  Briefcase,
  Target,
};

function HighlightCard({ icon, title, description }: Highlight) {
  const Icon = iconMap[icon];
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        {Icon && <Icon size={32} className="text-primary" />}
      </div>
      <h3 className="mb-3 text-lg font-bold text-text">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}

export function HighlightsSection() {
  return (
    <section id="highlights" className="bg-bg-alt py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={HIGHLIGHTS_SECTION.tagline} title={HIGHLIGHTS_SECTION.title} />
        </ScrollReveal>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <HighlightCard {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
