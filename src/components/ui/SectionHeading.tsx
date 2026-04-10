interface SectionHeadingProps {
  tagline: string;
  title: string;
  centered?: boolean;
}

export function SectionHeading({ tagline, title, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
        {tagline}
      </p>
      <h2 className="text-3xl font-bold text-text md:text-4xl">{title}</h2>
    </div>
  );
}
