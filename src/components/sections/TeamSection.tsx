"use client";

import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function TeamSection() {
  const { TEAM_SECTION, TEAM } = useContent();

  return (
    <section id="team" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob right-1/4 top-0 h-96 w-96 bg-violet-200/40" />
      <div className="blob blob-2 left-0 bottom-1/4 h-80 w-80 bg-orange-200/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={TEAM_SECTION.tagline} title={TEAM_SECTION.title} />
        </ScrollReveal>

        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.filter((g) => g.members.length <= 5).map((group, i) => (
            <ScrollReveal key={group.role} delay={i * 0.06} className="h-full">
              <div className="glass glass-shine glass-interactive h-full rounded-2xl p-7 text-center">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-primary md:text-base">
                  {group.role}
                </h3>
                <p className="text-lg font-medium text-text md:text-xl">
                  {group.members.join("、")}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {TEAM.filter((g) => g.members.length > 5).map((group) => (
          <ScrollReveal key={group.role} delay={0.3}>
            <div className="glass glass-shine mx-auto max-w-4xl rounded-3xl p-9 text-center">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-primary md:text-base">
                {group.role}
              </h3>
              <p className="text-base leading-loose text-text md:text-lg">
                {group.members.join("、")}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
