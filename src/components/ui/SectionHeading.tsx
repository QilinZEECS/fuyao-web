interface SectionHeadingProps {
  tagline: string;
  title: string;
  centered?: boolean;
}

export function SectionHeading({ tagline, title, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <span className="glass-pill mb-6 px-6 py-2 text-base font-semibold uppercase tracking-[0.2em] text-primary md:text-lg">
        {tagline}
      </span>
      <h2 className="text-3xl font-bold leading-tight text-text md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
