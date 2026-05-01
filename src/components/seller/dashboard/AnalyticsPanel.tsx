import { sellerStats } from "@/data/sellerMock";

export function AnalyticsPanel() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <div className="overflow-hidden rounded-2xl border border-namkeenly-navy/[0.05] bg-white shadow-[0_1px_2px_rgb(31_41_55_/_0.04),0_12px_32px_-12px_rgb(31_41_55_/_0.09)]">
        <div className="border-b border-namkeenly-navy/[0.05] bg-gradient-to-r from-white via-namkeenly-cream/40 to-white px-5 py-6 sm:px-8 sm:py-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-namkeenly-navy/40">
            Order volume
          </p>
          <p className="mt-1 text-[14px] text-namkeenly-navy/45">Trailing twelve weeks</p>
        </div>
        <div className="bg-gradient-to-b from-namkeenly-cream/50 to-white px-4 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
          <div className="flex h-44 items-end justify-between gap-1 border-b border-namkeenly-navy/[0.06] pb-2 sm:h-52 sm:gap-2">
            {[32, 48, 40, 56, 44, 62, 58, 72, 68, 80, 76, 88].map((h, i) => (
              <div
                key={i}
                className="w-full max-w-[8%] rounded-t-md bg-gradient-to-t from-namkeenly-navy/75 via-namkeenly-navy/45 to-namkeenly-accent/45 opacity-[0.92]"
                style={{ height: `${h}%` }}
                title={`Week ${i + 1}`}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-[12px] text-namkeenly-navy/38">
            <span>12 weeks ago</span>
            <span>This week</span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        <div className="rounded-2xl border border-namkeenly-navy/[0.05] bg-gradient-to-br from-white to-namkeenly-sage/15 px-5 py-7 shadow-namkeenly-sm sm:px-8 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-namkeenly-navy/40">
            Conversion
          </p>
          <p className="mt-5 font-display text-3xl font-semibold tabular-nums text-namkeenly-navy">3.8%</p>
          <p className="mt-2 text-[13px] leading-relaxed text-namkeenly-navy/45">Visit to order</p>
        </div>
        <div className="rounded-2xl border border-namkeenly-navy/[0.05] bg-gradient-to-br from-white to-namkeenly-cream px-5 py-7 shadow-namkeenly-sm sm:px-8 sm:py-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-namkeenly-navy/40">
            Average order
          </p>
          <p className="mt-5 font-display text-3xl font-semibold tabular-nums text-namkeenly-navy">₹428</p>
          <p className="mt-2 text-[13px] leading-relaxed text-namkeenly-navy/45">Before discounts</p>
        </div>
      </div>

      <p className="text-center text-[12px] leading-relaxed text-namkeenly-navy/38">
        Sample data · {sellerStats.pendingOrders} orders awaiting fulfillment
      </p>
    </div>
  );
}
