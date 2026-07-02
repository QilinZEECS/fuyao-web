import Image from "next/image";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { SPONSORS_SECTION, SPONSORS } from "@/lib/constants";

export function SponsorsSection() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={SPONSORS_SECTION.tagline} title={SPONSORS_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-5 items-start justify-items-center gap-3 sm:gap-8 md:gap-12">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white shadow-sm sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span className="text-center text-[10px] leading-tight text-text-secondary sm:text-xs">
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
