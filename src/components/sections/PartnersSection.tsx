"use client";

import { Sparkles } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function PartnersSection() {
  const { PARTNERS_SECTION } = useContent();

  return (
    <section id="sponsors" className="relative overflow-hidden py-24 md:py-32">
      <div className="blob right-1/3 top-0 h-80 w-80 bg-amber-200/40" />
      <div className="blob blob-2 left-1/4 bottom-0 h-80 w-80 bg-rose-200/35" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={PARTNERS_SECTION.tagline} title={PARTNERS_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass glass-shine mx-auto rounded-3xl p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/30 to-amber-200/10 text-amber-600">
              <Sparkles size={26} />
            </div>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              {PARTNERS_SECTION.placeholder}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
