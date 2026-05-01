/**
 * Minimal curved silhouette — suggests arches / landscape without literal ornament.
 */
export function HeroOrganicFoot() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 overflow-hidden text-namkeenly-navy/[0.045]" aria-hidden>
      <svg
        className="absolute bottom-0 h-full w-[140%] min-w-full -translate-x-[14%]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 80 C 240 20, 480 100, 720 56 C 960 12, 1200 92, 1440 48 L 1440 120 L 0 120 Z"
        />
      </svg>
      <svg
        className="absolute bottom-2 h-14 w-[120%] min-w-full -translate-x-[10%] text-namkeenly-clay/[0.07]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 56 C 320 8, 520 72, 820 32 C 1080 0, 1240 64, 1440 24 L 1440 80 L 0 80 Z"
        />
      </svg>
    </div>
  );
}
