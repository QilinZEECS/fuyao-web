"use client";

import Image from "next/image";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function GallerySection() {
  const { GALLERY_SECTION, GALLERY_STATS, PAST_TIMELINE, ACTIVITY_PHOTOS } = useContent();

  return (
    <section id="gallery" className="relative overflow-hidden py-28 md:py-40">
      <div className="blob left-1/4 top-1/4 h-96 w-96 bg-green-200/40" />
      <div className="blob blob-2 right-0 bottom-0 h-96 w-96 bg-blue-200/45" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={GALLERY_SECTION.tagline} title={GALLERY_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <p className="mx-auto mb-14 max-w-2xl text-center text-base leading-relaxed text-text-secondary">
            {GALLERY_SECTION.summary}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-shine glass-interactive rounded-2xl px-4 py-6 text-center"
              >
                <div className="bg-gradient-to-b from-primary to-primary-light bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto mb-20 max-w-3xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="glass-pill px-6 py-2 text-base font-semibold uppercase tracking-[0.2em] text-primary md:text-lg">
                {GALLERY_SECTION.activityTimeline}
              </span>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px" />

            {PAST_TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={item.date + item.title} delay={i * 0.05}>
                  <div className="relative mb-8 last:mb-0 flex items-start gap-6 md:gap-0">
                    <div className="glass absolute left-3 top-2 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary-light shadow-[0_0_12px_rgba(26,86,219,0.6)]" />
                    </div>

                    <div
                      className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                      }`}
                    >
                      <div className="glass glass-shine glass-interactive rounded-2xl p-5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {item.date}
                        </span>
                        <h4 className="mt-1 text-base font-bold text-text md:text-lg">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="glass-pill px-6 py-2 text-base font-semibold uppercase tracking-[0.2em] text-primary md:text-lg">
              {GALLERY_SECTION.highlights}
            </span>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITY_PHOTOS.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.06}>
              <div className="glass glass-interactive group relative aspect-[4/3] overflow-hidden rounded-2xl p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-sm font-medium text-white transition-transform duration-500 group-hover:translate-y-0">
                    {photo.alt}
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
