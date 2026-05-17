interface CoverHeroNamesProps {
  names: string;
}

export function CoverHeroNames({ names }: CoverHeroNamesProps) {
  return (
    <h1
      className="w-full text-center text-[clamp(1.05rem,3.8vw,1.25rem)] font-light uppercase tracking-[0.32em] text-white"
      style={{ fontFamily: "var(--font-cover-serif), serif" }}
    >
      {names}
    </h1>
  );
}
