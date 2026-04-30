"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";
import type { Mentor } from "@/types";

function MentorCard({ name, title, image }: Mentor) {
  return (
    <div className="glass glass-shine glass-interactive group flex h-full flex-col rounded-3xl p-6 text-center">
      <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/70 shadow-[0_8px_24px_-6px_rgba(15,23,42,0.25)] transition-transform duration-500 group-hover:scale-105">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 text-2xl font-bold text-primary/60">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-sm font-bold text-text">{name}</h3>
      <p className="mt-1 text-xs leading-snug text-text-secondary">{title}</p>
    </div>
  );
}

const TABS = ["resident", "flying"] as const;
type Tab = (typeof TABS)[number];

export function MentorsSection() {
  const { MENTORS_SECTION, MENTORS } = useContent();
  const [tab, setTab] = useState<Tab>("resident");
  const filtered = MENTORS.filter((m) => m.type === tab);

  return (
    <section id="mentors" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob -top-20 left-10 h-80 w-80 bg-blue-300/40" />
      <div className="blob blob-2 right-0 top-1/3 h-96 w-96 bg-amber-200/40" />
      <div className="blob blob-3 -bottom-10 left-1/3 h-80 w-80 bg-pink-200/40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={MENTORS_SECTION.tagline} title={MENTORS_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <LayoutGroup id="mentor-tabs">
            <div className="glass mb-16 mx-auto flex w-fit gap-1 rounded-full p-1.5">
              {TABS.map((t) => {
                const active = tab === t;
                return (
                  <motion.button
                    key={t}
                    onClick={() => setTab(t)}
                    whileHover={{ scale: active ? 1 : 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 ${
                      active ? "text-white" : "text-text-secondary hover:text-text"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="mentor-tab-pill"
                        className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/40"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{MENTORS_SECTION.tabs[t]}</span>
                  </motion.button>
                );
              })}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((mentor, i) => (
            <ScrollReveal key={mentor.name} delay={i * 0.04} className="h-full">
              <MentorCard {...mentor} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
