"use client";

import { ScrollReveal, SectionHeading } from "@/components/ui";
import { TIMELINE_SECTION, TIMELINE } from "@/lib/constants";

export function TimelineSection() {
  return (
    <section id="timeline" className="bg-bg-alt py-24 md:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={TIMELINE_SECTION.tagline} title={TIMELINE_SECTION.title} />
        </ScrollReveal>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-primary/20" />

          {TIMELINE.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="relative mb-12 last:mb-0">
                {/* Dot */}
                <div className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-primary bg-white" />

                <span className="mb-1 inline-block text-xs font-semibold tracking-wide text-primary">
                  {item.date}
                </span>
                <h3 className="mb-1 text-base font-bold text-text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
