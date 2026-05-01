import { sellerStats } from "@/data/sellerMock";

const cards = [
  { label: "Revenue · 30 days", value: sellerStats.revenue30d },
  { label: "Orders · 30 days", value: String(sellerStats.orders30d) },
  { label: "Live listings", value: String(sellerStats.activeListings) },
  { label: "Awaiting ship", value: String(sellerStats.pendingOrders) },
] as const;

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-2xl border border-white/80 bg-gradient-to-br from-white to-namkeenly-cream/60 px-5 py-6 shadow-[0_1px_2px_rgb(31_41_55_/_0.04),0_8px_24px_-6px_rgb(31_41_55_/_0.07)] transition-[transform,box-shadow] duration-300 ease-premium motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-namkeenly-md sm:px-7 sm:py-7"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-namkeenly-navy/40">
            {c.label}
          </p>
          <p className="mt-4 font-display text-[1.75rem] font-semibold tabular-nums leading-none tracking-tight text-namkeenly-navy sm:text-[2rem]">
            {c.value}
          </p>
        </div>
      ))}
    </div>
  );
}
