import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface CategoryCardProps extends HTMLAttributes<HTMLElement> {
  image: ReactNode;
  title: string;
  description?: string;
  countLabel?: string;
}

export function CategoryCard({
  image,
  title,
  description,
  countLabel,
  className,
  ...props
}: CategoryCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-namkeenly transition-[transform,box-shadow] duration-300 ease-premium motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-namkeenly-md",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-namkeenly-cream to-namkeenly-sage/20">
        {image}
        <div className="absolute inset-0 bg-gradient-to-t from-namkeenly-navy/55 via-namkeenly-navy/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="font-display text-2xl font-semibold tracking-tight drop-shadow-sm">
            {title}
          </h3>
          {description ? (
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-white/90">
              {description}
            </p>
          ) : null}
          {countLabel ? (
            <p className="mt-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {countLabel}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
