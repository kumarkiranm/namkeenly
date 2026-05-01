import { Button } from "@/components/namkeenly";
import { HeroOrganicFoot } from "@/components/visual";
import { cn } from "@/lib/cn";
import { heroSnackMinis } from "@/data/homeProducts";

function SnackMiniCard({
  name,
  region,
  photo,
  photoAlt,
  className,
}: {
  name: string;
  region: string;
  photo: string;
  photoAlt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-end overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/75 p-3 shadow-namkeenly-sm backdrop-blur-sm transition-[transform,box-shadow] duration-300 ease-premium sm:rounded-[1.35rem] sm:p-4 sm:motion-safe:hover:-translate-y-0.5 sm:motion-safe:hover:shadow-namkeenly",
        className,
      )}
    >
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl bg-namkeenly-cream">
        <img
          src={photo}
          alt={photoAlt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="font-display text-sm font-semibold leading-snug text-namkeenly-navy sm:text-base">{name}</p>
      <p className="text-[11px] font-medium text-namkeenly-navy/50 sm:text-xs">{region}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-namkeenly-navy/[0.04] bg-gradient-to-b from-namkeenly-cream via-white/40 to-namkeenly-wheat/30">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-[48%] bg-gradient-to-br from-namkeenly-accent/18 to-namkeenly-ochre/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-[46%] bg-gradient-to-tr from-namkeenly-sage/22 via-namkeenly-clay/10 to-transparent blur-3xl"
        aria-hidden
      />
      <HeroOrganicFoot />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="max-w-xl space-y-6 sm:space-y-8">
          <p className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-namkeenly-navy/10 bg-white/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-namkeenly-navy/70 shadow-namkeenly-sm sm:px-4 sm:text-xs sm:tracking-widest">
            Curated · Regional · Small-batch
          </p>
          <div className="space-y-4 sm:space-y-5">
            <h1 className="font-display text-[1.7rem] font-semibold leading-[1.12] tracking-tight text-namkeenly-navy min-[400px]:text-[1.9rem] sm:text-4xl sm:leading-[1.1] lg:text-[3.25rem]">
              Discover authentic{" "}
              <span className="text-namkeenly-accent">regional snacks</span> from across India
            </h1>
            <p className="text-[15px] leading-[1.65] text-namkeenly-navy/65 sm:text-lg sm:leading-relaxed lg:text-xl">
              Shop namkeen, mixtures, and festive treats from verified makers—each tied to a place,
              a recipe, and a story worth savoring.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#shop" variant="primary" className="w-full justify-center px-6 sm:w-auto">
              Explore snacks
            </Button>
            <Button href="#sellers" variant="secondary" className="w-full justify-center px-6 sm:w-auto">
              Become a seller
            </Button>
          </div>
          <p className="text-[13px] leading-snug text-namkeenly-navy/45 sm:text-sm">
            Free shipping over ₹499 · Fresh batches · Secure checkout
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:pl-2">
          <div className="overflow-hidden rounded-[2rem] border border-namkeenly-navy/[0.06] bg-[#FDFBF7] shadow-namkeenly-md ring-1 ring-namkeenly-navy/[0.04]">
            <img
              src="/hero-bowl.png"
              alt="Namkeenly brand mark with illustrated snack bowl, wordmark, and tagline"
              width={1024}
              height={601}
              className="h-auto w-full object-cover"
              decoding="async"
            />
          </div>
        </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:mt-16">
          {heroSnackMinis.map((s, i) => (
            <SnackMiniCard
              key={s.name}
              name={s.name}
              region={s.region}
              photo={s.photo}
              photoAlt={s.photoAlt}
              className={cn(i === 0 && "sm:translate-y-1", i === 2 && "sm:-translate-y-1")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
