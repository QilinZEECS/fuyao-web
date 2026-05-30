"use client";

import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function TeamSection() {
  const { TEAM_SECTION, TEAM } = useContent();

  return (
    <section id="team" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="network" />
      <div className="blob right-1/4 top-0 h-96 w-96 bg-violet-200/40" />
      <div className="blob blob-2 left-0 bottom-1/4 h-80 w-80 bg-orange-200/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={TEAM_SECTION.tagline} title={TEAM_SECTION.title} />
        </ScrollReveal>

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.filter((g) => g.members.length <= 5).map((group, i) => (
            <ScrollReveal key={group.role} delay={i * 0.06} className="h-full">
              <div className="glass glass-shine glass-interactive h-full rounded-3xl p-8 text-center">
                <h3 className="mb-3 text-base font-semibold uppercase tracking-[0.15em] text-primary md:text-lg">
                  {group.role}
                </h3>
                <p className="text-xl font-medium text-text md:text-2xl">
                  {group.members.join("、")}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {TEAM.filter((g) => g.members.length > 5).map((group) => (
          <ScrollReveal key={group.role} delay={0.3}>
            <div className="glass glass-shine mx-auto max-w-5xl rounded-3xl p-10 text-center">
              <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.15em] text-primary md:text-lg">
                {group.role}
              </h3>
              <p className="text-lg leading-loose text-text md:text-xl">
                {group.members.join("、")}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
