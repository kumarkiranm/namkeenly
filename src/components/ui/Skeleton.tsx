import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Show diagonal shimmer (respects reduced motion → pulse only) */
  shimmer?: boolean;
}

/**
 * Base loading block. Uses a soft shimmer by default; falls back to pulse when `prefers-reduced-motion`.
 */
export function Skeleton({ className, shimmer = true, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-namkeenly-navy/[0.07]",
        shimmer && "motion-reduce:animate-pulse",
        className,
      )}
      {...props}
    >
      {shimmer ? (
        <div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent motion-safe:animate-shimmer motion-reduce:hidden"
          aria-hidden
        />
      ) : null}
    </div>
  );
}
