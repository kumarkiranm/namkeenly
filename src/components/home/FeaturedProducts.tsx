import Link from "next/link";
import { Button, SnackProductCard } from "@/components/namkeenly";
import { featuredProducts } from "@/data/homeProducts";

export function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="scroll-mt-24 border-y border-namkeenly-navy/[0.04] bg-gradient-to-b from-white/55 via-namkeenly-wheat/15 to-namkeenly-cream/90 py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-namkeenly-navy sm:text-3xl lg:text-4xl">
              Featured this week
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-namkeenly-navy/60 sm:mt-4 sm:text-lg">
              Rotating picks from small kitchens and heritage brands we love.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:items-end">
            <Button href="#categories" variant="ghost" className="w-full shrink-0 justify-center sm:w-auto sm:justify-start">
              View all categories
            </Button>
            <Link
              href="/product/kerala-black-pepper-banana-chips"
              className="inline-flex min-h-11 touch-manipulation items-center text-sm font-semibold text-namkeenly-accent underline-offset-4 transition-colors duration-300 ease-premium hover:text-namkeenly-navy hover:underline sm:min-h-0 sm:justify-end"
            >
              View sample product page →
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
          {featuredProducts.map((p) => (
            <SnackProductCard
              key={p.title}
              region={p.region}
              productName={p.title}
              tag={p.tag}
              description={p.subtitle}
              price={p.price}
              imageSrc={p.photo}
              imageAlt={p.photoAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
