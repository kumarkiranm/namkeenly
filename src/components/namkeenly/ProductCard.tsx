import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface ProductCardProps extends HTMLAttributes<HTMLElement> {
  image: ReactNode;
  title: string;
  subtitle?: string;
  price: string;
  /** e.g. region badge + tag badges */
  badges?: ReactNode;
  footer?: ReactNode;
}

export function ProductCard({
  image,
  title,
  subtitle,
  price,
  badges,
  footer,
  className,
  ...props
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-namkeenly transition-[transform,box-shadow] duration-300 ease-premium motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-namkeenly-md",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-namkeenly-cream">
        <div className="h-full w-full transition-transform duration-500 ease-premium motion-safe:group-hover:scale-[1.03]">
          {image}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        {badges ? <div className="flex flex-wrap gap-2">{badges}</div> : null}
        <div className="space-y-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-namkeenly-navy group-hover:text-namkeenly-navy/90">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm leading-relaxed text-namkeenly-navy/60">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <p className="font-display text-xl font-semibold tabular-nums text-namkeenly-accent">
            {price}
          </p>
          {footer}
        </div>
      </div>
    </article>
  );
}
