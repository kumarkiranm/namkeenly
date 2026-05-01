import type { ProductReview } from "@/types/productDetail";
import { cn } from "@/lib/cn";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn(
            "h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]",
            i < rating ? "text-namkeenly-accent" : "text-namkeenly-navy/15",
          )}
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z"
          />
        </svg>
      ))}
    </div>
  );
}

export interface ProductReviewsProps {
  reviews: ProductReview[];
  productName: string;
  className?: string;
}

export function ProductReviews({ reviews, productName, className }: ProductReviewsProps) {
  const avg =
    reviews.length === 0
      ? 0
      : reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <section className={cn(className)} aria-labelledby="reviews-heading">
      <div className="flex flex-col gap-4 border-b border-namkeenly-navy/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-2 sm:pb-8">
        <h2 id="reviews-heading" className="font-display text-xl font-semibold text-namkeenly-navy sm:text-2xl lg:text-3xl">
          Customer reviews
        </h2>
        <div className="flex flex-col gap-2 text-[13px] text-namkeenly-navy/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <Stars rating={Math.round(avg)} />
            <span className="font-medium tabular-nums text-namkeenly-navy">{avg.toFixed(1)}</span>
          </div>
          <span className="leading-snug sm:inline">
            {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
            <span className="hidden sm:inline"> for {productName}</span>
          </span>
        </div>
      </div>

      <ul className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
        {reviews.map((r) => (
          <li key={r.id} className="border-b border-namkeenly-navy/[0.06] pb-8 last:border-0 last:pb-0 sm:pb-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-namkeenly-navy">{r.author}</p>
                  {r.verified ? (
                    <span className="rounded-full bg-namkeenly-sage/25 px-2 py-0.5 text-xs font-medium text-namkeenly-navy/75">
                      Verified purchase
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-namkeenly-navy/45">{r.date}</p>
              </div>
              <Stars rating={r.rating} />
            </div>
            {r.title ? (
              <p className="mt-3 font-display text-base font-medium leading-snug text-namkeenly-navy sm:mt-4 sm:text-lg">
                {r.title}
              </p>
            ) : null}
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-namkeenly-navy/70 sm:text-base">
              {r.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
