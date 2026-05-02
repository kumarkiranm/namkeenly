import Link from "next/link";
import { Badge, Button } from "@/components/namkeenly";
import { PlaceholderImg } from "@/components/shared/PlaceholderImg";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { OrganicBackdrop } from "@/components/visual";
import { ProductReviews } from "@/components/product-detail/ProductReviews";
import { SellerInfoCard } from "@/components/product-detail/SellerInfoCard";
import type { ProductDetail } from "@/types/productDetail";
import { sampleProductDetail } from "@/data/sampleProductDetail";

function ShelfLifeCallout({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-namkeenly-sage/35 bg-gradient-to-br from-namkeenly-sage/15 to-namkeenly-cream px-5 py-6 shadow-namkeenly-sm sm:px-8 sm:py-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/80 text-namkeenly-navy shadow-namkeenly-sm"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-namkeenly-navy">Shelf life & storage</h3>
          <p className="mt-2 text-sm leading-relaxed text-namkeenly-navy/70 sm:text-base">{text}</p>
        </div>
      </div>
    </div>
  );
}

export interface ProductDetailPageProps {
  product?: ProductDetail;
}

export function ProductDetailPage({ product = sampleProductDetail }: ProductDetailPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-namkeenly-cream via-namkeenly-wheat/40 to-namkeenly-cream">
      <OrganicBackdrop variant="marketplace" className="opacity-90" />
      <SiteHeader />

      <main className="relative">
        {/* Breadcrumb */}
        <div className="border-b border-namkeenly-navy/[0.05] bg-white/50">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
            <nav className="text-[13px] text-namkeenly-navy/55 sm:text-sm" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="transition-colors hover:text-namkeenly-navy">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-namkeenly-navy/35">
                  /
                </li>
                <li>
                  <Link href="/#shop" className="transition-colors hover:text-namkeenly-navy">
                    Shop
                  </Link>
                </li>
                <li aria-hidden className="text-namkeenly-navy/35">
                  /
                </li>
                <li className="max-w-[min(100%,14rem)] font-medium leading-snug text-namkeenly-navy/80 sm:max-w-none">
                  <span className="line-clamp-2 sm:line-clamp-none">{product.name}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <article className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
            {/* Large image */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl bg-white shadow-namkeenly-md ring-1 ring-namkeenly-navy/[0.04] sm:rounded-[1.25rem] lg:sticky lg:top-28 lg:rounded-2xl">
                <div className="aspect-[4/5] w-full sm:aspect-square lg:aspect-[4/5]">
                  <PlaceholderImg
                    label={product.imageLabel}
                    className="h-full w-full text-base sm:text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Summary column */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-5">
              <div className="space-y-4 sm:space-y-5">
                <Badge kind="region" className="text-xs">
                  {product.region}
                </Badge>
                <h1 className="font-display text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-namkeenly-navy sm:text-3xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.12]">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-baseline gap-2 border-b border-namkeenly-navy/[0.08] pb-6 sm:gap-3 sm:pb-8">
                  <span className="font-display text-2xl font-semibold tabular-nums text-namkeenly-accent sm:text-3xl lg:text-4xl">
                    {product.price}
                  </span>
                  {product.priceNote ? (
                    <span className="text-[13px] leading-snug text-namkeenly-navy/50 sm:text-sm">{product.priceNote}</span>
                  ) : null}
                </div>
              </div>

              <Button type="button" variant="primary" className="w-full justify-center py-3.5 text-base sm:py-2.5">
                Add to cart
              </Button>

              <p className="text-center text-[11px] leading-snug text-namkeenly-navy/45 sm:text-xs">
                Free shipping over ₹499 · Secure checkout
              </p>

              <SellerInfoCard seller={product.seller} className="lg:shadow-namkeenly" />
            </div>
          </div>

          {/* Story + details */}
          <div className="mt-12 border-t border-namkeenly-navy/[0.07] pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-xl font-semibold text-namkeenly-navy sm:text-2xl lg:text-3xl">
                  The story
                </h2>
                <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                  {product.story.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-[1.75] text-namkeenly-navy/75 sm:text-lg sm:leading-[1.75] lg:text-xl lg:leading-[1.8]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-8 lg:col-span-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-namkeenly-navy sm:text-xl">Ingredients</h3>
                  <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                    {product.ingredients.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-relaxed text-namkeenly-navy/75 sm:text-base"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-namkeenly-accent/80"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ShelfLifeCallout text={product.shelfLife} />
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12 border-t border-namkeenly-navy/[0.07] pt-12 sm:mt-20 sm:pt-16 lg:mt-24 lg:pt-20">
            <ProductReviews reviews={product.reviews} productName={product.name} />
          </div>

          <div className="mt-10 flex justify-center px-2 sm:mt-14 lg:mt-16">
            <Link
              href="/"
              className="inline-flex min-h-11 w-full max-w-sm touch-manipulation items-center justify-center gap-2 rounded-xl border border-namkeenly-sage/50 bg-white px-5 py-3 text-sm font-semibold tracking-wide text-namkeenly-navy shadow-namkeenly-sm transition-[transform,box-shadow,colors] duration-300 ease-premium hover:border-namkeenly-sage hover:bg-namkeenly-sage/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-namkeenly-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-namkeenly-cream motion-safe:hover:-translate-y-px motion-safe:hover:shadow-namkeenly sm:min-h-0 sm:w-auto sm:max-w-none sm:py-2.5"
            >
              ← Back to shop
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
