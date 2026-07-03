"use client";

import { Mail, Send } from "lucide-react";
import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function ContactSection() {
  const { CONTACT_SECTION, CONTACT_INFO } = useContent();

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="lab" />
      <div className="blob left-10 top-10 h-96 w-96 bg-blue-200/45" />
      <div className="blob blob-2 right-10 bottom-10 h-80 w-80 bg-pink-200/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={CONTACT_SECTION.tagline} title={CONTACT_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-text-secondary md:text-xl md:leading-9">
            {CONTACT_SECTION.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="contact-console glass glass-shine relative mx-auto max-w-xl overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="contact-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="relative z-10">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="glass glass-shine glass-interactive group flex flex-col justify-between gap-8 rounded-[1.5rem] p-7 text-left transition duration-500 hover:-translate-y-1.5 hover:bg-white/58"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Mail size={26} />
                  </div>
                  <Send className="text-primary/60 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-text md:text-base">
                    {CONTACT_SECTION.emailLabel}
                  </p>
                  <span className="mt-3 block break-all text-lg font-bold text-primary">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
