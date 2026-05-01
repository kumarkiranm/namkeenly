import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeKind = "region" | "tag";

const kindClasses: Record<BadgeKind, string> = {
  region:
    "bg-namkeenly-sage/25 text-namkeenly-navy border border-namkeenly-sage/40",
  tag: "bg-white/90 text-namkeenly-navy/85 border border-namkeenly-navy/10",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  kind?: BadgeKind;
  children: ReactNode;
}

export function Badge({ kind = "tag", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide shadow-namkeenly-sm",
        kindClasses[kind],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
