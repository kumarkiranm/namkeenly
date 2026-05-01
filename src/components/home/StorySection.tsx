export function StorySection() {
  return (
    <section
      id="story"
      className="scroll-mt-24 border-t border-namkeenly-navy/[0.04] bg-gradient-to-br from-namkeenly-wheat/40 via-namkeenly-cream to-white/90 py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-namkeenly-navy sm:text-3xl lg:text-4xl">
              Our story
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-namkeenly-navy/65 sm:mt-6 sm:text-lg sm:leading-relaxed">
              Namkeenly began around a simple idea: the best snacks are inseparable from where they
              come from. We partner with makers who honor tradition—adjusting heat, texture, and
              technique—so every bite feels both familiar and worth returning to.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-namkeenly-navy/65 sm:text-lg sm:leading-relaxed">
              From sourcing to shipping, we keep the experience calm and considered—so you spend
              less time comparing labels and more time enjoying the crunch.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-white/80 bg-gradient-to-br from-white to-namkeenly-wheat/35 p-6 shadow-namkeenly-md sm:rounded-[1.35rem] sm:p-10">
            <blockquote className="font-display text-lg font-medium leading-relaxed text-namkeenly-navy sm:text-xl lg:text-2xl">
              “We wanted a marketplace that feels like a trusted neighbourhood shop—only bigger.”
            </blockquote>
            <p className="mt-6 text-sm font-medium text-namkeenly-navy/50">— The Namkeenly team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
