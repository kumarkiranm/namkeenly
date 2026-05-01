import { Button } from "@/components/namkeenly";

export function SellerBanner() {
  return (
    <section id="sellers" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-namkeenly-sage/32 via-namkeenly-wheat/50 to-namkeenly-clay/18 px-5 py-10 shadow-namkeenly-md sm:rounded-[1.75rem] sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-12 top-4 h-52 w-52 rounded-[48%] bg-gradient-to-br from-namkeenly-accent/18 to-namkeenly-ochre/12 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-8 h-44 w-44 rounded-[46%] bg-gradient-to-tr from-namkeenly-sage/25 to-transparent blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-namkeenly-navy/55">
            For makers & micro-brands
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-namkeenly-navy sm:text-3xl lg:text-4xl">
            Share your regional snacks with a nationwide audience
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-namkeenly-navy/65 sm:mt-5 sm:text-lg sm:leading-relaxed">
            List products, tell your story, and reach customers who care about provenance—without
            drowning in logistics noise.
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
            <Button href="#sellers" variant="primary" className="w-full justify-center sm:w-auto">
              Start selling
            </Button>
            <Button href="#story" variant="secondary" className="w-full justify-center sm:w-auto">
              How it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
