"use client";

import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function AboutSection() {
  const { ABOUT, STATS } = useContent();

  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob left-0 top-1/4 h-96 w-96 bg-blue-200/45" />
      <div className="blob blob-2 right-0 top-10 h-80 w-80 bg-amber-200/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={ABOUT.tagline} title={ABOUT.title} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-loose text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-shine glass-interactive rounded-2xl px-4 py-6"
              >
                <div className="bg-gradient-to-b from-primary to-primary-light bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
