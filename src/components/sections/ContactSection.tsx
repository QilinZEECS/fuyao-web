"use client";

import { Mail, MessageCircle } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function ContactSection() {
  const { CONTACT_SECTION, CONTACT_INFO } = useContent();

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob left-10 top-10 h-96 w-96 bg-blue-200/45" />
      <div className="blob blob-2 right-10 bottom-10 h-80 w-80 bg-pink-200/35" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={CONTACT_SECTION.tagline} title={CONTACT_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mb-12 text-base leading-relaxed text-text-secondary">
            {CONTACT_SECTION.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto grid max-w-md gap-5 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="glass glass-shine glass-interactive group flex flex-col items-center gap-3 rounded-3xl p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                <Mail size={26} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text">
                {CONTACT_SECTION.emailLabel}
              </p>
              <span className="break-all text-sm text-primary">
                {CONTACT_INFO.email}
              </span>
            </a>

            <div className="glass glass-shine glass-interactive flex flex-col items-center gap-3 rounded-3xl p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary">
                <MessageCircle size={26} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text">
                {CONTACT_SECTION.wechatLabel}
              </p>
              <span className="text-sm text-primary">@{CONTACT_INFO.wechat}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
