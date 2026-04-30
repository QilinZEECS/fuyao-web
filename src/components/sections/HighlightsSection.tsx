"use client";

import { GraduationCap, Users, Briefcase, Target } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";
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
    <div className="glass glass-shine glass-interactive h-full rounded-3xl p-7 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary shadow-inner">
        {Icon && <Icon size={30} />}
      </div>
      <h3 className="mb-3 text-lg font-bold text-text">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}

export function HighlightsSection() {
  const { HIGHLIGHTS_SECTION, HIGHLIGHTS } = useContent();

  return (
    <section id="highlights" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob left-1/4 top-0 h-96 w-96 bg-purple-200/40" />
      <div className="blob blob-2 right-1/4 bottom-0 h-96 w-96 bg-cyan-200/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={HIGHLIGHTS_SECTION.tagline} title={HIGHLIGHTS_SECTION.title} />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className="h-full">
              <HighlightCard {...item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
