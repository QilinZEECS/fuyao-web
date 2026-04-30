"use client";

import Image from "next/image";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function SponsorsSection() {
  const { SPONSORS_SECTION, SPONSORS } = useContent();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="blob left-1/3 top-0 h-80 w-80 bg-sky-200/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={SPONSORS_SECTION.tagline} title={SPONSORS_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="glass glass-shine glass-interactive flex flex-col items-center gap-3 rounded-3xl px-7 py-6"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white/80 ring-2 ring-white/60">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="max-w-[220px] text-center text-xs font-medium text-text">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
