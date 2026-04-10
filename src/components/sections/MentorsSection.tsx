"use client";

import { useState } from "react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { MENTORS_SECTION, MENTORS } from "@/lib/constants";
import type { Mentor } from "@/types";

function MentorCard({ name, title, image }: Mentor) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 h-28 w-28 overflow-hidden rounded-full bg-bg-alt">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-text-secondary/40">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-sm font-bold text-text">{name}</h3>
      <p className="mt-1 text-xs leading-snug text-text-secondary/70">{title}</p>
    </div>
  );
}

export function MentorsSection() {
  const [tab, setTab] = useState<"resident" | "flying">("resident");

  const filtered = MENTORS.filter((m) => m.type === tab);

  return (
    <section id="mentors" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={MENTORS_SECTION.tagline} title={MENTORS_SECTION.title} />
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="mb-16 flex justify-center gap-4">
            <button
              onClick={() => setTab("resident")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                tab === "resident"
                  ? "bg-primary text-white"
                  : "bg-bg-alt text-text-secondary hover:text-text"
              }`}
            >
              {MENTORS_SECTION.tabs.resident}
            </button>
            <button
              onClick={() => setTab("flying")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                tab === "flying"
                  ? "bg-primary text-white"
                  : "bg-bg-alt text-text-secondary hover:text-text"
              }`}
            >
              {MENTORS_SECTION.tabs.flying}
            </button>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((mentor, i) => (
            <ScrollReveal key={mentor.name} delay={i * 0.05}>
              <MentorCard {...mentor} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
