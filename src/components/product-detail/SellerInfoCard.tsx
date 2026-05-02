import Link from "next/link";
import type { SellerInfo } from "@/types/productDetail";
import { Button } from "@/components/namkeenly";
import { cn } from "@/lib/cn";

const secondaryCtaClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-namkeenly-sage/50 bg-white px-5 py-2.5 text-sm font-semibold tracking-wide text-namkeenly-navy shadow-namkeenly-sm transition-colors hover:border-namkeenly-sage hover:bg-namkeenly-sage/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namkeenly-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-namkeenly-cream";

export interface SellerInfoCardProps {
  seller: SellerInfo;
  className?: string;
}

export function SellerInfoCard({ seller, className }: SellerInfoCardProps) {
  return (
    <aside
      className={cn(
        "rounded-2xl border border-namkeenly-navy/[0.07] bg-white p-6 shadow-namkeenly sm:p-8",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-namkeenly-navy/45">
        Sold by
      </p>
      <div className="mt-5 flex gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-namkeenly-sage/35 to-namkeenly-accent/25 font-display text-lg font-semibold text-namkeenly-navy"
          aria-hidden
        >
          {seller.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold text-namkeenly-navy">{seller.name}</h3>
          <p className="mt-0.5 text-sm text-namkeenly-navy/55">{seller.location}</p>
          {seller.established ? (
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-namkeenly-accent">
              {seller.established}
            </p>
          ) : null}
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-namkeenly-navy/65">{seller.bio}</p>
      {seller.shopHref ? (
        seller.shopHref.startsWith("/") ? (
          <Link href={seller.shopHref} className={cn(secondaryCtaClass, "mt-6")}>
            Visit shop
          </Link>
        ) : (
          <Button href={seller.shopHref} variant="secondary" className="mt-6 w-full justify-center">
            Visit shop
          </Button>
        )
      ) : null}
    </aside>
  );
}
