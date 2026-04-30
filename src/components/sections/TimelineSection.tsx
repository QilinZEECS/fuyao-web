"use client";

import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function TimelineSection() {
  const { TIMELINE_SECTION, TIMELINE } = useContent();

  return (
    <section id="timeline" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob right-10 top-10 h-96 w-96 bg-indigo-200/40" />
      <div className="blob blob-2 left-10 bottom-10 h-80 w-80 bg-rose-200/35" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={TIMELINE_SECTION.tagline} title={TIMELINE_SECTION.title} />
        </ScrollReveal>

        <div className="relative pl-10">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          {TIMELINE.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="relative mb-6 last:mb-0">
                <div className="glass absolute -left-[26px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary-light shadow-[0_0_12px_rgba(26,86,219,0.6)]" />
                </div>

                <div className="glass glass-shine glass-interactive rounded-2xl p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.date}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-text">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
