"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { PlaceholderImg } from "@/components/shared/PlaceholderImg";

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      aria-hidden
    >
      {filled ? (
        <path d="M11.645 20.91-.007-.003-.022-.012a.705.705 0 0 1-.092-.053 24.42 24.42 0 0 1-4.896-4.06C4.356 14.215 3 12.014 3 9.5 3 7.014 5.014 5 7.5 5c1.596 0 3.081.784 4.01 2.091a.75.75 0 0 0 1.18 0C13.419 5.784 14.904 5 16.5 5 18.986 5 21 7.014 21 9.5c0 2.514-1.356 4.715-3.63 7.285a24.42 24.42 0 0 1-4.896 4.06l-.022.012-.007.003h-.002a.75.75 0 0 1-.586 0z" />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      )}
    </svg>
  );
}

export interface SnackProductCardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** Shown on the region badge (e.g. Kerala, Gujarat) */
  region: string;
  productName: string;
  /** Short line under the title */
  description?: string;
  /** Optional highlight (e.g. “Bestseller”) */
  tag?: string;
  price: string;
  /** Product photo URL (serializable; use from Server Components instead of `image`) */
  imageSrc?: string;
  imageAlt?: string;
  /** Custom media (only pass from Client Components; not serializable from Server) */
  image?: ReactNode;
  /** Label inside the default placeholder when `image` is not provided */
  imageLabel?: string;
  onAddToCart?: () => void;
  addToCartLabel?: string;
  /** Controlled wishlist state */
  wishlisted?: boolean;
  /** Initial wishlist state when uncontrolled */
  defaultWishlisted?: boolean;
  onWishlistChange?: (wishlisted: boolean) => void;
}

export function SnackProductCard({
  region,
  productName,
  description,
  tag,
  price,
  imageSrc,
  imageAlt,
  image,
  imageLabel = "Snack",
  onAddToCart,
  addToCartLabel = "Add to cart",
  wishlisted: wishlistedProp,
  defaultWishlisted = false,
  onWishlistChange,
  className,
  ...props
}: SnackProductCardProps) {
  const [internalWishlisted, setInternalWishlisted] = useState(defaultWishlisted);
  const wishlisted = wishlistedProp ?? internalWishlisted;

  const toggleWishlist = () => {
    const next = !wishlisted;
    if (wishlistedProp === undefined) {
      setInternalWishlisted(next);
    }
    onWishlistChange?.(next);
  };

  const media =
    imageSrc && imageAlt ? (
      <img
        src={imageSrc}
        alt={imageAlt}
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    ) : (
      image ?? <PlaceholderImg label={imageLabel} />
    );

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-namkeenly transition-[transform,box-shadow] duration-300 ease-premium",
        "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-namkeenly-md",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-namkeenly-cream">
        <div className="h-full w-full transition-transform duration-500 ease-premium motion-safe:group-hover:scale-[1.03]">
          {media}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3 sm:p-4">
          <Badge kind="region" className="pointer-events-auto shadow-namkeenly-sm">
            {region}
          </Badge>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist();
            }}
            aria-pressed={wishlisted}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className={cn(
              "pointer-events-auto flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-namkeenly-navy/8 bg-white/90 text-namkeenly-navy shadow-namkeenly-sm backdrop-blur-sm transition-[transform,colors,box-shadow] duration-300 ease-premium sm:h-10 sm:w-10",
              "hover:border-namkeenly-accent/40 hover:text-namkeenly-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namkeenly-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:scale-105 motion-safe:active:scale-95",
              wishlisted && "border-namkeenly-accent/35 bg-white text-namkeenly-accent",
            )}
          >
            <HeartIcon filled={wishlisted} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="space-y-1.5 sm:space-y-2">
          <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-tight text-namkeenly-navy sm:text-lg lg:text-xl">
            {productName}
          </h3>
          {tag ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-namkeenly-accent/90">
              {tag}
            </p>
          ) : null}
          {description ? (
            <p className="line-clamp-3 text-[14px] leading-relaxed text-namkeenly-navy/60 sm:line-clamp-2 sm:text-[0.9375rem]">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="font-display text-xl font-semibold tabular-nums text-namkeenly-accent sm:text-2xl">
            {price}
          </p>
          <Button
            type="button"
            variant="primary"
            className="w-full shrink-0 px-6 py-3 sm:w-auto sm:min-w-[9.5rem] sm:py-2.5"
            {...(onAddToCart ? { onClick: onAddToCart } : {})}
          >
            {addToCartLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
