import { Link } from "react-router-dom";

const footerShop = [
  { label: "All snacks", to: "/#shop" },
  { label: "Categories", to: "/#categories" },
  { label: "Gift boxes", to: "/#shop" },
  { label: "New arrivals", to: "/#shop" },
];

const footerCo = [
  { label: "Our story", to: "/#story" },
  { label: "For sellers", to: "/#sellers" },
  { label: "Shipping", to: "/#shop" },
  { label: "Help center", to: "/#story" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-namkeenly-navy/[0.06] bg-gradient-to-b from-white to-namkeenly-wheat/45">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo-horizontal.png"
              alt="Namkeenly"
              width={604}
              height={210}
              className="h-10 w-auto max-w-[260px] sm:h-11"
              decoding="async"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-namkeenly-navy/55">
              A curated marketplace for regional Indian snacks—warm, honest, and rooted in place.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-namkeenly-navy/45">
              Shop
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerShop.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="-mx-1 inline-flex min-h-11 items-center rounded-md px-1 text-[15px] text-namkeenly-navy/65 transition-colors hover:text-namkeenly-navy sm:min-h-0 sm:text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-namkeenly-navy/45">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerCo.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="-mx-1 inline-flex min-h-11 items-center rounded-md px-1 text-[15px] text-namkeenly-navy/65 transition-colors hover:text-namkeenly-navy sm:min-h-0 sm:text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-namkeenly-navy/45">
              Stay in touch
            </p>
            <p className="mt-4 text-sm leading-relaxed text-namkeenly-navy/55">
              Seasonal drops & maker stories—occasionally in your inbox.
            </p>
            <form className="mt-5 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                className="min-h-11 flex-1 rounded-xl border border-namkeenly-navy/12 bg-namkeenly-cream/50 px-4 text-sm text-namkeenly-navy placeholder:text-namkeenly-navy/35 outline-none ring-namkeenly-navy/20 focus:border-namkeenly-sage/50 focus:ring-2"
              />
              <button
                type="submit"
                className="min-h-11 touch-manipulation rounded-xl bg-namkeenly-navy px-5 py-2.5 text-sm font-semibold text-white shadow-namkeenly-sm transition-colors hover:bg-namkeenly-navy/90 sm:min-h-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-namkeenly-navy/[0.06] pt-8 text-sm text-namkeenly-navy/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Namkeenly. All rights reserved.</p>
          <div className="flex flex-wrap gap-2 sm:gap-6">
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-md px-2 text-[15px] hover:text-namkeenly-navy/70 sm:min-h-0 sm:text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-md px-2 text-[15px] hover:text-namkeenly-navy/70 sm:min-h-0 sm:text-sm"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
