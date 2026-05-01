import { cn } from "@/lib/cn";

export type OrganicBackdropVariant = "marketplace" | "dashboard";

export interface OrganicBackdropProps {
  variant?: OrganicBackdropVariant;
  className?: string;
}

/**
 * Soft organic blobs + whisper grain. Keeps a modern SaaS feel—warmth without motif clutter.
 */
export function OrganicBackdrop({
  variant = "marketplace",
  className,
}: OrganicBackdropProps) {
  const soft = variant === "dashboard";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 namkeenly-grain-fine opacity-[0.65]",
          soft && "opacity-45",
        )}
      />
      <div
        className={cn(
          "absolute -left-[28%] -top-[25%] h-[min(95vh,920px)] w-[min(125vw,940px)] rotate-[9deg] rounded-[46%] bg-gradient-to-br blur-3xl",
          soft
            ? "from-namkeenly-clay/10 via-namkeenly-sage/12 to-transparent"
            : "from-namkeenly-clay/18 via-namkeenly-ochre/8 to-transparent",
        )}
      />
      <div className="absolute -right-[22%] top-[18%] h-[75vh] w-[85vw] -rotate-[11deg] rounded-[44%] bg-gradient-to-bl from-namkeenly-sage/16 via-namkeenly-accent/8 to-transparent blur-3xl" />
      <div className="absolute bottom-[5%] left-[15%] h-[45vh] w-[55vw] rotate-[6deg] rounded-[48%] bg-gradient-to-tr from-namkeenly-wheat/90 via-namkeenly-clay/12 to-transparent blur-3xl" />
      {!soft ? (
        <div className="absolute right-[10%] top-[55%] h-[35vh] w-[40vw] rounded-[42%] bg-gradient-to-t from-namkeenly-accent/10 to-transparent blur-3xl" />
      ) : null}
    </div>
  );
}
