import { cn } from "@/lib/cn";
import {
  IconCup,
  IconGift,
  IconHeart,
  IconJar,
  IconLeaf,
  IconSpark,
} from "./icons";

const categories = [
  { name: "Namkeen & savories", blurb: "Bhujia, sev, mixtures", icon: IconSpark },
  { name: "Regional classics", blurb: "State-special picks", icon: IconLeaf },
  { name: "Festive & gifting", blurb: "Boxes for every occasion", icon: IconGift },
  { name: "Pickles & chutneys", blurb: "Bold, slow-crafted jars", icon: IconJar },
  { name: "Tea-time pairs", blurb: "Khakra, mathri, more", icon: IconCup },
  { name: "Sweet cravings", blurb: "Ladoos, chikkis, bites", icon: IconHeart },
] as const;

export function CategoryShowcase() {
  return (
    <section
      id="categories"
      className="scroll-mt-24 bg-gradient-to-b from-transparent via-namkeenly-wheat/12 to-transparent py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-namkeenly-navy sm:text-3xl lg:text-4xl">
            Browse by category
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-namkeenly-navy/60 sm:mt-4 sm:text-lg">
            Start with how you snack—then narrow by region, heat level, or maker.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {categories.map(({ name, blurb, icon: Icon }) => (
            <li key={name}>
              <a
                href="#shop"
                className={cn(
                  "group flex min-h-[4.5rem] touch-manipulation items-center gap-4 rounded-2xl border border-namkeenly-navy/[0.06] bg-white p-4 shadow-namkeenly-sm transition-[transform,box-shadow,border-color,background-color] duration-300 ease-premium active:bg-namkeenly-cream/40 sm:min-h-0 sm:gap-5 sm:p-6 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-namkeenly-sage/35 motion-safe:hover:shadow-namkeenly",
                )}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.15rem] bg-gradient-to-br from-namkeenly-wheat/80 to-namkeenly-sage/28 text-namkeenly-navy transition-colors group-hover:from-namkeenly-sage/22 group-hover:to-namkeenly-clay/20">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="min-w-0">
                  <span className="font-display text-lg font-semibold text-namkeenly-navy group-hover:text-namkeenly-navy/90">
                    {name}
                  </span>
                  <span className="mt-1 block text-sm text-namkeenly-navy/55">{blurb}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
