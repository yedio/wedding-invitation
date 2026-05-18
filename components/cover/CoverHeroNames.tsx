interface CoverHeroNamesProps {
  names: string;
}

export function CoverHeroNames({ names }: CoverHeroNamesProps) {
  return (
    <h1
      className="w-full text-center text-[clamp(1.2rem,4.5vw,1.5rem)] font-normal uppercase tracking-[0.32em] text-white"
      style={{ fontFamily: "var(--font-cover-serif), serif" }}
    >
      {names}
    </h1>
  );
}
