import { IconMapPin, IconShieldCheck, IconTruck } from "./icons";

const items = [
  {
    title: "Verified sellers",
    body: "Every maker is reviewed for quality, hygiene, and transparent sourcing.",
    icon: IconShieldCheck,
  },
  {
    title: "Regional authenticity",
    body: "Recipes rooted in place—from Rajasthan sev to Kerala banana chips.",
    icon: IconMapPin,
  },
  {
    title: "Delivered nationwide",
    body: "Carefully packed and shipped across India with tracking you can trust.",
    icon: IconTruck,
  },
] as const;

export function TrustBadges() {
  return (
    <section className="border-b border-namkeenly-navy/[0.04] bg-gradient-to-b from-white/70 via-namkeenly-wheat/25 to-namkeenly-cream/80 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
          {items.map(({ title, body, icon: Icon }) => (
            <div key={title} className="flex gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.125rem] bg-gradient-to-br from-namkeenly-sage/30 to-namkeenly-clay/15 text-namkeenly-navy shadow-namkeenly-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 space-y-2">
                <h3 className="font-display text-lg font-semibold leading-snug text-namkeenly-navy">{title}</h3>
                <p className="text-[15px] leading-relaxed text-namkeenly-navy/60">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
